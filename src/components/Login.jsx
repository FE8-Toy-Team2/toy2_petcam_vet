import React, { useState } from 'react';
import styled from 'styled-components';
import "./common.css";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
// import { Navigate, Link }	from 'react-router-dom';
// import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../auth';
// import { useAuth } from '../contexts/authContext'

const Login = () => {

	const auth = getAuth()
	const provider = new GoogleAuthProvider()

	const handleAuth = () => {
		signInWithPopup(auth, provider)
		.then(result => {})
		.catch(error => {
			console.log(error)
		})
	}

	return (
		<Container>
      <Form>
				<Logo></Logo>
				<Input type="text" placeholder="이메일"></Input>
				<Input type="password" placeholder="비밀번호"></Input>
				<Button type="submit">로그인</Button>
				<Divider></Divider>
				<LoginGoogle onClick={handleAuth} type="submit">Google 계정으로 로그인</LoginGoogle>
				<SignupButton type="submit">회원가입</SignupButton>
			</Form>
    </Container>
	)
}

export default Login;

const Container = styled.div`
	width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
	background-color: var(--bgcolor);
`
const Form = styled.form`
	width: 300px;
	height: 415px;	
	// margin-top: 50px;
	background-color: #fff;
	border-radius: 10px;
	justify-content: center;
	align-items: center;
	box-shadow: 1px 1px 10px var(--darkgray);	
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
	border: 1px solid var(--yellow);
	text-align: center;	
	font-size: 14px;
	font-family: var(--pre-reg);
`
const Button = styled.button`
	width: 256px;
	height: 44px;
	margin: 5px 20px;
	border-radius: 10px;
	border: none;
	background-color: var(--yellow);
	text-align: center;
	font-size: 14px;
	font-family: var(--pre-reg);
	cursor: pointer;
`
const Divider = styled.div`
width: 256px;
height: 1px;
margin: 10px 20px;
background-color: var(--darkgray);
`
const LoginGoogle = styled.button`
	width: 256px;
	height: 44px;
	margin: 5px 20px;
	border-radius: 10px;
	border: none;
	color: var(--darkgray);
	background-color: var(--lightgray);
	text-align: center;
	font-family: var(--pre-reg);
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
	border-radius: 10px;
	border: none;
	color: var(--darkgray);
	background-color: var(--lightgray);
	text-align: center;
	font-family: var(--pre-reg);
	cursor: pointer;
`
