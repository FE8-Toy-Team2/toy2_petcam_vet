import React, { useState } from "react";
import styled from "styled-components";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      Swal.fire({
        text: `${email}님이 로그인하셨습니다`
      });
      onLogin();
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === "auth/user-not-found") {
        alert("등록되지 않은 사용자입니다");
      }
    }
    setEmail("");
    setPassword("");
  };

  const handleGoogleLogin = async (event) => {
    event.preventDefault();

    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      // alert(`${user.email}님이 로그인하셨습니다`);
      Swal.fire({
        text: `${user.email}님이 로그인하셨습니다`
      });
      onLogin();
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    
    }
  };

  return (
    <Container>
      <Form onSubmit={handleLogin}>
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
        <Button type="submit">로그인</Button>
        <Divider></Divider>
        <LoginGoogle onClick={handleGoogleLogin} type="submit">
          Google 계정으로 로그인
        </LoginGoogle>
        <SignupButton type="submit">
          <Link to="/signup">회원가입</Link>
        </SignupButton>
      </Form>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-gray-2);
`;
const Form = styled.form`
  width: 300px;
  height: 415px;
  background-color: #fff;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 10px var(--color-darkgray);
`;
const Logo = styled.div`
  vertical-align: middle;
  height: 18px;
  margin: 48px auto;
  background: url("../img/petcam_logo.svg") no-repeat center center;
`;
const Input = styled.input`
  width: 250px;
  height: 40px;
  margin: 5px 20px;
  border-radius: 10px;
  border: 1px solid var(--color-prime);
  text-align: center;
  font-size: 14px;
  font-family: var(--font-weight-bold);
`;
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
  transition: 0.3s;

  &:hover {
    background-color: var(--color-brown);
    color: #e3e2de;
  }
`;
const Divider = styled.div`
  width: 256px;
  height: 1px;
  margin: 10px 20px;
  background-color: var(--color-gray-3);
`;
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
`;
const SignupButton = styled.button`
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
`;
