// App.jsx 복사

import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Nav from "./components/Nav"
import app from "./firebase"

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Login />
      <Signup />
      {/* 여기밑에 라우터가 와요  */}
    </>
  );
}

// export default App;


// 비밀번호 확인 기능

import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다');
      return;
    }

    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      alert(`${email}님은 회원으로 등록되셨습니다`);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`다시 입력해주세요`);
    }
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleGoogleLogin = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      alert(`${user.email}님은 로그인하셨습니다`);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`등록되지 않은 사용자입니다`);
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
        <Input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="비밀번호 확인"
        />
        <Button type="submit">회원가입</Button>
        <Divider></Divider>
        <LoginGoogle onClick={handleGoogleLogin} type="submit">
          Google 계정으로 로그인
        </LoginGoogle>
        <SignupButton type="submit">로그인</SignupButton>
      </Form>
    </Container>
  );
};

export default Signup;
