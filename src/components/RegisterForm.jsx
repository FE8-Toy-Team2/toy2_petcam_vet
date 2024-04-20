import { useState, useRef } from "react";
import styled from "styled-components";
import { dataBase, storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Swal from "sweetalert2";
import { NormalButton } from "./Buttons";
import { SmallButton } from "./Buttons";
import dayjs from "dayjs";
import { addDoc, collection } from "firebase/firestore";

function RegisterForm() {
  const [previewImage, setPreviewImage] = useState(null);
  const fileRef = useRef(null);
  const sectionDataRef = useRef({
    file: null,
    guardian: "",
    name: "",
    age: "",
    species: "",
    sex: "",
    neutering: "",
    weight: "",
    admit_to_hospital: false,
    admit_to_hospital_in: "",
    admit_to_hospital_out: "",
    clinic_text: "",
    clinic_today: dayjs().format("YYYY-MM-DDTHH:mm"),
    reservation_next: "",
    id: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    console.log("Value type:", value);
    if (id !== "file") {
      const trimmedValue = typeof value === "string" ? value.trim() : value;
      sectionDataRef.current[id] = trimmedValue;
    }
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = fileRef.current.files[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
      const imageName = `${dayjs().format("YYYYMMDDHHmmss")}_${file.name}`;

      sectionDataRef.current.file = file;
      sectionDataRef.current.imageName = imageName;
    }
  };

  const handleDeleteImage = (e) => {
    e.preventDefault();
    setPreviewImage(null);
    sectionDataRef.current.file = null;
    fileRef.current.value = null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const file = fileRef.current.files[0];
    if (!file) {
      Swal.fire({
        icon: "error",
        title: "파일을 선택해주세요.",
      });
      return;
    }

    const storageRef = ref(storage, `images/${dayjs().format("YYYYMMDDHHmmss")}_${file.name}`);

    try {
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);

      // sectionDataRef.current에서 file 객체를 제거
      const { file: _, ...profileData } = sectionDataRef.current;
      profileData.image = downloadURL;
      profileData.imageName = file.name; // 파일 이름 저장 (옵션)

      await addDoc(collection(dataBase, "chartDatas"), profileData);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "등록되었습니다!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("파일 업로드 또는 데이터 저장 중 오류 발생:", error);
      Swal.fire({
        icon: "error",
        title: "등록 실패",
        text: "에러 메시지: " + error.message,
      });
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "등록을 취소하시겠습니까??",
      text: "삭제한 정보는 복구할 수 없습니다.",
      icon: "warning",
      timer: 3000,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "삭제",
    }).then((result) => {
      if (result.isConfirmed) {
        setPreviewImage(null);
        fileRef.current.value = null;
        Swal.fire({
          title: "삭제완료",
          text: "파일이 삭제되었습니다.",
          icon: "success",
          timer: 3000,
        });
      }
    });
  };

  return (
    <Container>
      <Header>
        <Title style={{ marginLeft: "10px" }}>등록하기</Title>
        <SubmitButton onClick={handleSubmit} type="submit">
          등록
        </SubmitButton>
        <CancelButton onClick={handleCancel}>취소</CancelButton>
      </Header>
      <Inpobox>
        <ImgInput>
          <img
            src={previewImage}
            style={{
              width: "350px",
              height: "350px",
              objectFit: "cover",
              display: "block",
              backgroundColor: "var(--color-gray-2)",
              borderRadius: "10px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              margin: "0 0 30px 10px",
            }}
            alt="이미지 미리보기"
          />
          <div style={{ textAlign: "center" }}>
            <input ref={fileRef} type="file" accept="image/*" onChange={handleFileChange} style={{ display: "none" }} />
            <UploadButton
              onClick={(e) => {
                e.preventDefault();
                fileRef.current.click();
              }}
            >
              파일 추가
            </UploadButton>
            <DeleteButton onClick={handleDeleteImage}>삭제</DeleteButton>
          </div>
        </ImgInput>

        <Section>
          <Input id="guardian" type="text" placeholder="보호자명" onChange={handleInputChange} />
          <Input id="name" type="text" placeholder="이름" onChange={handleInputChange} />
          <Input id="species" type="text" placeholder="종" onChange={handleInputChange} />
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
            <textarea id="age" placeholder="나이" onChange={handleInputChange} />
            개월
          </Option>
          <Option>
            <textarea id="weight" placeholder="체중" onChange={handleInputChange} />
            kg
          </Option>
        </Section>
      </Inpobox>
    </Container>
  );
}

const Container = styled.form`
  position: fixed;
  width: fit-content;
  margin: auto;
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

export default RegisterForm;
