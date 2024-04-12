

  const handleGoogleLogin = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      // Handle successful Google login
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // Handle Google login error
    }
  };

  return (
    <Container>
      <Form onSubmit={handleLogin}>
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
        <LoginGoogle onClick={handleGoogleLogin}>Google 계정으로 로그인</LoginGoogle>
        {/* Link to signup page */}
      </Form>
    </Container>
  );
};

export default Login;