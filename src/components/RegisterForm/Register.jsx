
import { dataBase, storage } from "../../firebase";
import { setDoc, doc } from "firebase/firestore"; // Import doc from firebase.firestore
// 내가 입력한 내용
import React, { useState, useRef, useEffect } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import app from '../../firebase'
// import firebase from 'firebase'

import styled from "styled-components";
import Swal from "sweetalert2";
import { NormalButton } from "../Buttons";
import { SmallButton } from "../Buttons";

const db = getFirestore(app);

function RegisterForm() {
	
  const formData = {
    guardian: '',
		name: '',
		species: '',
		sex: '',
		neutering: '',
		age: '',
		weight: '',
  };

	const [formState, setFormState] = useState(formData);

const handleInputChange = (event) => {
	event.preventDefault();	
	const { name, value } = event.target;
	setFormState((prev) => {
		return {...prev, [name]: value }
	})
	
};

const addDoc = (event) => {
	event.preventDefault();

	db.collection('newdb').add({
		name: formState.name,
    species: formState.species,
    sex: formState.sex,
    neutering: formState.neutering,
    age: formState.age,
    weight: formState.weight,
    guardian: formState.guardian,
	}).then((docRef) => {
		const docId = docRef.id;
		console.log(docId);
	}).catch((err) => {
		console.log('Error ' + err.message)
	})
}
	
// const handleSubmit = async () => {
// 	try {			
// 		const profilesCollection = collection(db, 'registerdata');			
// 		await addDoc(profilesCollection, formDataRef.current);			
// 		alert('Data successfully saved to Firestore!');	} 
// 		catch (error) {			
// 		console.error('Error saving data to Firestore:', error);
// 	}
// };
	
	const localImagePath = './000603.png';	
  const [previewImage, setPreviewImage] = useState(localImagePath);
	
  const fileRef = useRef(null);

    // Function to handle file change
    const handleFileChange = (e) => {   		
        const file = e.target.files[0];

        if (file) {
					const reader = new FileReader();            
            reader.onload = (event) => {
                setPreviewImage(event.target.result);			
            };
            reader.readAsDataURL(file);
    			} 
        }
			

  // const handleFileChange = () => {
  //   const file = fileRef.current.files[0];
  //   console.log(file);
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       setPreviewImage(reader.result);
  //       sectionDataRef.current.file = reader.result;
  //       console.log(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

	// const handleFileChange = async () => {
	// 	const file = fileRef.current.files[0];
	// 	if (file) {
	// 		const storageRef = ref(storage, `images/${file.name}`);			
	// 		await uploadBytes(storageRef, file);	
	// 		const downloadURL = await getDownloadURL(storageRef);			
	// 		setPreviewImage(downloadURL);
	// 		sectionDataRef.current.file = downloadURL;	
	// 		console.log(downloadURL);
	// 	}
	// };

  const handleDeleteImage = () => {
		event.preventDefault();
    setPreviewImage(null);
    sectionDataRef.current.file = null;
    fileRef.current.value = null;
  };


  // const handleSubmit = () => {
  //   if (!sectionDataRef.current.file || Object.values(sectionDataRef.current).some((value) => !value)) {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oops...",
  //       text: "모든 항목을 작성해주세요!",
  //     });
  //     return;
  //   }  
  //   if (sectionDataRef.current.neutering !== "O" && sectionDataRef.current.neutering !== "X") {
  //     alert("중성화여부를 선택해주세요.");
  //     return;
  //   }  
  //   if (sectionDataRef.current.sex !== "남" && sectionDataRef.current.sex !== "여") {
  //     alert("성별을 선택해주세요.");
  //     return;
  //   }  
  //   const file = fileRef.current.files[0];
  //   const storageRef = storage.ref();
  //   const storageRoot = storageRef.child("images/" + file.name);
  //   const uploadTask = storageRoot.put(file);
  
  //   uploadTask
  //     .then((snapshot) => {
  //       snapshot.ref.getDownloadURL().then((downloadURL) => {
  //         const profileData = { ...sectionDataRef.current, image: downloadURL }; // Use sectionDataRef.current
  //         setDoc(doc(dataBase, "profiles", "uniqueDocumentId"), profileData) // Set document in Firestore with a unique ID
  //           .then(() => {
  //             alert("프로필이 등록되었습니다.");
  //             // 필요에 따라 페이지 리로드 또는 다른 동작 수행
  //           })
  //           .catch((error) => {
  //             console.error("프로필 등록 중 오류 발생:", error);
  //           });
  //       });
  //     })
  //     .catch((error) => {
  //       console.error("파일 업로드 중 오류 발생:", error);
  //     });
  // };

  const handleCancel = () => {
    if (window.confirm("프로필 등록을 취소하시겠습니까?")) {
      setPreviewImage(null);
      fileRef.current.value = null;
    }
  };

  return (
    <Container>
      <Header>
        <Title>등록하기</Title>
        <SubmitButton onClick={addDoc} type="submit">
          등록
        </SubmitButton>
        <CancelButton onClick={handleCancel}>취소</CancelButton>
      </Header>
      <Inpobox>
        <ImgInput>
        <img
				src={previewImage}
				style={{
					width: '350px',
					height: '350px',
					objectFit: 'cover',
					display: 'block',
					backgroundColor: 'var(--color-gray-2)',
					borderRadius: '10px',
					boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
				}}
				alt="Image Preview"
			/>
          <div style={{ textAlign: "center" }}>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <UploadButton onClick={() => fileRef.current.click()}>
              파일 추가
            </UploadButton>
            <DeleteButton onClick={handleDeleteImage}>삭제</DeleteButton>
          </div>
        </ImgInput>

        <Section>
          <Input
            id="guardian"
            type="text"
            placeholder="보호자명"
						value={formState.guardian}
            onChange={handleInputChange}
          />
          <Input
            id="name"
            type="text"
            placeholder="이름"
						value={formState.name}
            onChange={handleInputChange}
          />
          <Input
            id="species"
            type="text"
            placeholder="종"
						value={formState.species}
            onChange={handleInputChange}
          />
          <Select id="sex" onChange={handleInputChange}>
            <option value="">성별을 선택하세요</option>
            <option value="남">남</option>
            <option value="여">여</option>
          </Select>
          <Select id="neutering" onChange={handleInputChange}>
            <option value="">중성화여부</option>
            <option value="O">O</option>
            <option value="X">X</option>
          </Select>
          <Option>
            <textarea
              id="age"
              placeholder="나이"
							value={formState.age}
              onChange={handleInputChange}
            />
            개월
          </Option>
          <Option>
            <textarea
              id="weight"
              placeholder="체중"
							value={formState.weight}
              onChange={handleInputChange}
            />
            kg
          </Option>
        </Section>
      </Inpobox>
    </Container>
  );
}


export default RegisterForm

const Container = styled.form`
  position: relative;
  width: 900px;
  margin: 0 auto;
  font-family: "Pretendard";
  font-weight: bold;
  color: var(--color-black);
  border-radius: 10px;
`;

const Header = styled.div`
  font-size: 32px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 2px solid var(--color-black);
  display: flex;
  justify-content: end;
  position: relative;
`;
const Title = styled.h1`
  font-weight: 600;
  position: absolute;
  left: 0;
`;
const Inpobox = styled.div`
  display: flex;
`;
const SubmitButton = styled(NormalButton)`
  background-color: var(--color-prime);
  color: var(--color-black);
  margin-right: 16px;
`;
const CancelButton = styled(NormalButton)`
  background-color: var(--color-gray-2);
  color: var(--color-black);
`;
const ImgInput = styled.div`
  margin-top: 20px;
  margin-right: 30px;
`;

const UploadButton = styled(SmallButton)`
  background-color: var(--color-prime);
  color: var(--color-black);
  margin-top: 30px;
 	margin-right: 16px;
  width: 90px;
`;

const DeleteButton = styled(SmallButton)`
  background-color: var(--color-gray-2);
  color: var(--color-black);
  width: 90px;
`;

const Section = styled.div`
  margin-top: 0px;
`;
const Input = styled.input`
  text-align: center;
  background-color: var(--color-gray-2);
  margin: 16px;
  display: block;
  width: 450px;
  height: 45px;
  border: none;
  border-radius: 10px;
  color: var(--color-black);
  font-weight: var(--font-weight-bold);
`;
const Select = styled.select`
  text-align: center;
  background-color: var(--color-gray-2);
  margin: 16px;
  display: block;
  width: 450px;
  height: 45px;
  border: none;
  border-radius: 10px;
  font-weight: var(--font-weight-bold);
`;

const Option = styled.div`
  background-color: var(--color-gray-2);
  margin: 16px;
  display: flex;
  align-items: center;
  width: 450px;
  justify-content: center;
  height: 45px;
  border: none;
  border-radius: 10px;
  color: var(--color-black);
  font-weight: var(--font-weight-bold);

  textarea {
    display: flex;
    border: none;
    width: 50px;
    height: 15px;
    padding: 5px 0px 5px 0px;
    text-align: center;
    font-size: 10px;
    margin-right: 5px;
    resize: none;
    border-radius: 5px;
    font-size: var(--font-size-XS);
    font-weight: var(--font-weight-bold);
  }
`;

