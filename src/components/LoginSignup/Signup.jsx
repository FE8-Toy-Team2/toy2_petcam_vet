import React, { useState } from 'react'
import styled from 'styled-components'
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Link } from 'react-router-dom';


const Signup = ({ onLogin, isLoggedIn }) => {

	const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[^\s]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSignup = async (event) => {
    event.preventDefault();
		
		if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다');
      return;
    }
		if (!validatePassword(password)) {
      alert('비밀번호는 최소 8자 이상이어야 하며, 대소문자, 숫자, 특수문자를 포함해야 합니다.');
      return;
    }

    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      alert(`${email}님이 회원으로 등록되셨습니다`)
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
			if (errorCode === 'auth/email-already-in-use') {
				alert('이미 등록된 이메일 주소입니다.');
			} else {
				alert('다시 입력해주세요');
			}
    }
		setEmail('')
		setPassword('')	
		setConfirmPassword('');
  };

	const handleGoogleLogin = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      alert(`${user.email}님이 로그인하셨습니다`)
			onLogin()
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;      
    }
  };

	return (
		<Container>
      <Form onSubmit={handleSignup}>
				<Logo></Logo>
				<Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
        />
				<InputText>* 비밀번호는 최소 8자 이상, 대소문자, 숫자, 특수문자를 포함해야 합니다.</InputText>
        <Input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="비밀번호 확인"
        />			
				<Button type="submit">회원가입</Button>
				<Divider></Divider>
				<LoginGoogle onClick={handleGoogleLogin} type="submit" 
					style={{ marginBottom: isLoggedIn ? '20px' : '5px' }}>Google 계정으로 로그인</LoginGoogle>				
				{!isLoggedIn && 
				<SignupButton type="submit"><Link to="/login">로그인</Link></SignupButton>					
				}
			</Form>
    </Container>
	)
}



export default Signup

const Container = styled.div`
	width: 100%;
  height: 80vh;
  display: flex;  
	justify-content: center;
  align-items: center;
	background-color: var(--color-gray-2);
`
const Form = styled.form`
	width: 300px;	
	background-color: #fff;
	border-radius: 10px;
	justify-content: center;
	align-items: center;
	box-shadow: 1px 1px 10px var(--color-darkgray);	
`
const Logo = styled.div`
	vertical-align: middle;
	height: 18px;
	margin: 48px auto;
	background: url("../img/petcam_logo.svg") no-repeat center center;
`
const Input = styled.input`
	width: 250px;
	height: 40px;
	margin: 5px 20px;
	border-radius: 10px;
	border: 1px solid var(--color-prime);
	text-align: center;	
	font-size: 14px;
	font-family: var(--font-weight-bold);
`
const InputText = styled.p`
	font-size: 9px;
	font-family: var(--font-weight-bold);
	color: var(--color-darkgray);
	margin: 5px 20px;
`
const Button = styled.button`
	width: 256px;
	height: 44px;
	margin: 5px 20px;
	border-radius: 10px;
	border: none;
	background-color: var(--color-prime);
	text-align: center;
	font-size: 14px;
	font-family: var(--font-weight-bold);
	cursor: pointer;
	transition: .3s;

	&:hover {
		background-color: var(--color-brown);
    color: #e3e2de;
	}
`
const Divider = styled.div`
width: 256px;
height: 1px;
margin: 10px 20px;
background-color: var(--color-gray-3);
`
const LoginGoogle = styled.button`
	width: 256px;
	height: 44px;
	margin: 5px 20px;
	border-radius: 10px;
	border: none;
	color: var(--color-darkgray);
	background-color: var(--color-gray-1);
	text-align: center;
	font-family: var(--font-weight-bold);
	cursor: pointer;

	&::before {
		content: "";
    display: inline-block;
    vertical-align: middle;
    height: 18px;
    width: 18px;
    margin-right: 15px;
    background: url("../img/Google__G__logo.svg") no-repeat center center;
	}
`
const SignupButton = styled.button`
	width: 256px;
	height: 44px;
	margin: 5px 20px;
	margin-bottom: 17px;
	border-radius: 10px;
	border: none;
	color: var(--color-darkgray);
	background-color: var(--color-gray-1);
	text-align: center;
	font-family: var(--font-weight-bold);
	cursor: pointer;
`