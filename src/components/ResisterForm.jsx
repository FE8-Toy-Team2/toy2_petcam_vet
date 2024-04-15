import React, { useState } from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app';

function ResisterForm() {
  const [file, setFile] = useState(null);
  const [profileForm, setProfileForm] = useState({
    guardian: '',
    name: '',
    age: '',
    species: '',
    sex: '',
    neutering: '',
    weight: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setProfileForm((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (!file) {
      alert('이미지를 선택해주세요.');
      return;
    }

    const storageRef = firebase.storage().ref();
    const storageRoot = storageRef.child('images/' + file.name);
    const uploadTask = storageRoot.put(file);

    uploadTask.then((snapshot) => {
      snapshot.ref.getDownloadURL().then((downloadURL) => {
        const profileData = { ...profileForm, image: downloadURL };
        firebase.firestore().collection('profile').add(profileData)
          .then(() => {
            alert('프로필이 등록되었습니다.');
            // 필요에 따라 페이지 리로드 또는 다른 동작 수행
          })
          .catch((error) => {
            console.error('프로필 등록 중 오류 발생:', error);
          });
      });
    }).catch((error) => {
      console.error('파일 업로드 중 오류 발생:', error);
    });
  };


  return (
    <Container>
      <Header>
        <Title>등록하기</Title>
        <SubmitButton onClick={handleSubmit} type='button'>등록</SubmitButton>
        <CancelButton>취소</CancelButton>
      </Header>

      <ImgInput className='Img' type="file" accept="image/*" onChange={handleFileChange} />

      <Section> 
        <Input id='guardian' type='text' placeholder='보호자명' value={profileForm.guardian} onChange={handleInputChange} />
        <Input id='name' type='text' placeholder='이름' value={profileForm.name} onChange={handleInputChange} />
        <Input id='age' type='text' placeholder='나이' value={profileForm.age} onChange={handleInputChange} />
        <Input id='species' type='text' placeholder='종' value={profileForm.species} onChange={handleInputChange} />
        <Select id='sex' value={profileForm.sex} onChange={handleInputChange}>
          <option value="남">남</option>
          <option value="여">여</option>
        </Select>
        <Select id='neutering' value={profileForm.neutering} onChange={handleInputChange}>
          <option value="O">O</option>
          <option value="X">X</option>
        </Select>
        <Input id='weight'  type='number' placeholder='체중' value={profileForm.weight} onChange={handleInputChange} />
      </Section>
    </Container>
  );
}


const Container = styled.form`
  position: fixed;
  left: 600px;
  top: 100px;
  font-family: "Pretendard";
  font-weight: bold;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Header = styled.div`
  position: relative;
  font-size: 32px;
  border-bottom: 1px solid #000;
`
const Title = styled.h1`
  font-weight: 600;
`

const SubmitButton = styled.button`
  width: 50px;
  height: 30px;
  border: none;
  border-radius: 10px;
  background-color: #FFC603; 
  margin-right: 16px;
  font-weight: 600;
`
const CancelButton = styled.button`
  width: 50px;
  height: 30px;
  border: none;
  border-radius: 10px;
  background-color: #EEEEEE; 
  font-weight: 600;
`

const ImgInput = styled.input`
  background-color: #EEEEEE;
  display: block;
  width: 350px;
  height: 350px;
  border: none;
  border-radius: 10px;
`

const Section = styled.div`
  position: absolute;
  top: 100px;
`
const Input = styled.input`
  text-align: center;
  background-color: #EEEEEE;
  margin: 16px;
  display: block;
  width: 450px;
  height: 45px;
  border: none;
  border-radius: 10px;
`
const Select = styled.select`
  text-align: center;
  background-color: #EEEEEE;
  margin: 16px;
  display: block;
  width: 450px;
  height: 45px;
  border: none;
  border-radius: 10px;
`

export default ResisterForm;