import { useState } from "react";
import styled from "styled-components";
import { doc, setDoc } from "firebase/firestore";
import { dataBase } from "../firebase";
import Swal from "sweetalert2";

function ResisterForm() {
  const [file, setFile] = useState(null);

  const [profileForm, setProfileForm] = useState({
    guardian: "",
    name: "",
    age: "",
    species: "",
    sex: "",
    neutering: "",
    weight: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setProfileForm((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const render = new FileReader();
      render.onloadend = () => {
        setFile(render.result);
      };
      render.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (!file || Object.values(profileForm).some(value => !value)) {
      alert("모든 항목을 ㅇ작성해주세요.");
      return;
    }

    if (profileForm.neutering !== 'O' && profileForm.neutering !== 'X') {
      alert("중성화여부를 선택해주세요.");
      return;
    }
  
    if (profileForm.sex !== '남' && profileForm.sex !== '여') {
      alert("성별을 선택해주세요.");
      return;
    }

    const storageRef = firebase.storage().ref();
    const storageRoot = storageRef.child("images/" + file.name);
    const uploadTask = storageRoot.put(file);

    uploadTask
      .then((snapshot) => {
        snapshot.ref.getDownloadURL().then((downloadURL) => {
          const profileData = { ...profileForm, image: downloadURL };
          firebase
            .firestore()
            .collection("profile")
            .add(profileData)
            .then(() => {
              alert("프로필이 등록되었습니다.");
              // 필요에 따라 페이지 리로드 또는 다른 동작 수행
            })
            .catch((error) => {
              console.error("프로필 등록 중 오류 발생:", error);
            });
        });
      })
      .catch((error) => {
        console.error("파일 업로드 중 오류 발생:", error);
      });
  };

  const handleCancel = () => {
    // 취소 버튼 클릭 시 프로필 등록 취소 로직 추가
    if (window.confirm("프로필 등록을 취소하시겠습니까?")) {
      // 사용자가 확인을 누르면 입력된 데이터 초기화
      setProfileForm({
        guardian: "",
        name: "",
        age: "",
        species: "",
        sex: "",
        neutering: "",
        weight: "",
      });
      // 선택된 파일 초기화
      setFile(null);
    }
  };

  return (
    <Container>
      <Header>
        <Title>등록하기</Title>
        <SubmitButton onClick={handleSubmit} type="submit">
          등록
        </SubmitButton>
        <CancelButton onClick={handleCancel}>취소</CancelButton>
      </Header>
      <Inpobox>
        <ImgInput>
          <img
            src={file}
            style={{
              width: "350px",
              height: "350px",
              objectFit: "cover", // 이미지를 정사각형에 맞춰 자르기
              display: "block",
              backgroundColor: "var(--color-gray-2)",
              borderRadius: "10px"
            }}
            alt=""
          />
          <div>
            <input
              className="Img"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: "block" }}
            />
            <button onClick={() => document.querySelector(".Img").click()}>
              파일
            </button>
            <button onClick={() => document.querySelector(".Img").click()}>
              삭제
            </button>
          </div>
        </ImgInput>

        <Section>
          <Input
            id="guardian"
            type="text"
            placeholder="보호자명"
            value={profileForm.guardian}
            onChange={handleInputChange}
          />
          <Input
            id="name"
            type="text"
            placeholder="이름"
            value={profileForm.name}
            onChange={handleInputChange}
          />
          <Input
            id="age"
            type="number"
            placeholder="나이"
            value={profileForm.age}
            onChange={handleInputChange}
          />
          <Input
            id="species"
            type="text"
            placeholder="종"
            value={profileForm.species}
            onChange={handleInputChange}
          />
          <Select id="sex" value={profileForm.sex} onChange={handleInputChange}>
            <option value="">성별을 선택하세요</option>
            <option value="남">남</option>
            <option value="여">여</option>
          </Select>
          <Select
            id="neutering"
            value={profileForm.neutering}
            onChange={handleInputChange}
          >
            <option value="">중성화여부</option>
            <option value="O">O</option>
            <option value="X">X</option>
          </Select>
          <Input
            id="weight"
            type="number"
            placeholder="체중"
            value={profileForm.weight}
            onChange={handleInputChange}
          />
        </Section>
      </Inpobox>
    </Container>
  );
}

const Container = styled.form`
  position: fixed;
  width: fit-content;
  margin: auto;
  left: 600px;
  top: 200px;
  font-family: "Pretendard";
  font-weight: bold;
  color: var(--color-black);
`;

const Header = styled.div`
  font-size: 32px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #000;
  display: flex;
  justify-content: end;
  position: relative;
`;
const Title = styled.h1`
  font-weight: 600;
  position: absolute;
  left: 0;
`;

const SubmitButton = styled.button`
  width: 50px;
  height: 30px;
  border: none;
  border-radius: 10px;
  background-color: #ffc603;
  margin-right: 16px;
  font-weight: 600;
`;
const CancelButton = styled.button`
  width: 50px;
  height: 30px;
  border: none;
  border-radius: 10px;
  background-color: #eeeeee;
  font-weight: 600;
`;

const ImgInput = styled.div`
  margin-top: 20px;
`;

const Inpobox = styled.div`
  display: flex;
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
  background-color: #eeeeee;
  margin: 16px;
  display: block;
  width: 450px;
  height: 45px;
  border: none;
  border-radius: 10px;
  font-weight: var(--font-weight-bold);
`;

export default ResisterForm;
