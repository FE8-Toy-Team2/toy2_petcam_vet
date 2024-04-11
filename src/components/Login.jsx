import React from 'react';
import styled from 'styled-components';
import "./Login.css";

function Login () {
	return (
		<Container>
      <LoginForm>
				<LoginInput type="text" placeholder="이메일"></LoginInput>
				<LoginInput type="password" placeholder="비밀번호"></LoginInput>
				<LoginButton type="submit">로그인</LoginButton>
				<Divider></Divider>
				<LoginGoogle type="submit">Google 계정으로 로그인</LoginGoogle>
				<SignupButton type="submit">회원가입</SignupButton>
			</LoginForm>
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
	background-color: #e0e0e0;
`
const LoginForm = styled.form`
	width: 300px;
	height: 415px;	
	background-color: #fff;
	border-radius: 10px;
	justify-content: center;
	align-items: center;
	box-shadow: 1px 1px 10px #999999;
	
`
const LoginInput = styled.input`
	width: 250px;
	height: 40px;
	margin: 5px 20px;
	border-radius: 10px;
	border: 1px solid var(--yellow);
	text-align: center;	
	font-size: 14px;
	font-family: var(--pre-reg);
`
const LoginButton = styled.button`
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
background-color: #999999;
`
const LoginGoogle = styled.button`
	width: 256px;
	height: 44px;
	margin: 5px 20px;
	border-radius: 10px;
	border: none;
	color: #999999;
	background-color: #f4f4f4;
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
	color: #999999;
	background-color: #f4f4f4;
	text-align: center;
	font-family: var(--pre-reg);
	cursor: pointer;
`