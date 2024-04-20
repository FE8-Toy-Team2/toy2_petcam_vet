// // App.jsx 복사

// import reset from "styled-reset";
// import { createGlobalStyle } from "styled-components";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import Nav from "./components/Nav"
// import app from "./firebase"

// const GlobalStyle = createGlobalStyle`
//   ${reset}
// `;

// function App() {
//   return (
//     <>
//       <GlobalStyle />
//       <Nav />
//       <Login />
//       <Signup />
//       {/* 여기밑에 라우터가 와요  */}
//     </>
//   );
// }

// // export default App;

// // 비밀번호 확인 기능

// import React, { useState } from 'react';
// import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSignup = async (event) => {
//     event.preventDefault();

//     if (password !== confirmPassword) {
//       alert('비밀번호가 일치하지 않습니다');
//       return;
//     }

//     const auth = getAuth();
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
//       alert(`${email}님은 회원으로 등록되셨습니다`);
//     } catch (error) {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert(`다시 입력해주세요`);
//     }
//     setEmail('');
//     setPassword('');
//     setConfirmPassword('');
//   };

//   const handleGoogleLogin = async () => {
//     const auth = getAuth();
//     const provider = new GoogleAuthProvider();
//     try {
//       const userCredential = await signInWithPopup(auth, provider);
//       const user = userCredential.user;
//       alert(`${user.email}님은 로그인하셨습니다`);
//     } catch (error) {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert(`등록되지 않은 사용자입니다`);
//     }
//   };

//   return (
//     <Container>
//       <Form onSubmit={handleSignup}>
//         <Logo></Logo>
//         <Input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="이메일"
//         />
//         <Input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="비밀번호"
//         />
//         <Input
//           type="password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           placeholder="비밀번호 확인"
//         />
//         <Button type="submit">회원가입</Button>
//         <Divider></Divider>
//         <LoginGoogle onClick={handleGoogleLogin} type="submit">
//           Google 계정으로 로그인
//         </LoginGoogle>
//         <SignupButton type="submit">로그인</SignupButton>
//       </Form>
//     </Container>
//   );
// };

// export default Signup;

// //비밀번호 유효성 검사

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const validatePassword = (password) => {
//     const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[^\s]).{8,}$/;
//     return passwordRegex.test(password);
//   };

//   const handleSignup = async (event) => {
//     event.preventDefault();

//     if (password !== confirmPassword) {
//       alert('비밀번호가 일치하지 않습니다');
//       return;
//     }

//     if (!validatePassword(password)) {
//       setPasswordError('비밀번호는 최소 8자 이상이어야 하며, 대소문자, 숫자, 특수문자를 포함해야 합니다.');
//       return;
//     }

//     const auth = getAuth();
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
//       alert(`${email}님은 회원으로 등록되셨습니다`)
//     } catch (error) {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert(`다시 입력해주세요`)
//     }
//     setEmail('')
//     setPassword('')
//     setConfirmPassword('');
//     setPasswordError('');
//   };

//   // Rest of your code remains the same

//   return (
//     <Container>
//       <Form onSubmit={handleSignup}>
//         <Logo></Logo>
//         <Input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="이메일"
//         />
//         <Input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="비밀번호"
//         />
//         <Input
//           type="password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           placeholder="비밀번호 확인"
//         />
//         {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
//         <Button type="submit">회원가입</Button>
//         <Divider></Divider>
//         <LoginGoogle onClick={handleGoogleLogin} type="submit">Google 계정으로 로그인</LoginGoogle>
//         <SignupButton type="submit">로그인</SignupButton>
//       </Form>
//     </Container>
//   );

// // router 만들기

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <GlobalStyle />
//       <Nav />
//       <Switch>
//         <Route exact path="/">
//           <Home />
//         </Route>
//         <Route path="/login">
//           <Login />
//         </Route>
//         <Route path="/signup">
//           <Signup />
//         </Route>
//         {/* Add more routes for other pages */}
//       </Switch>
//       <Footer />
//     </Router>
//   );
// }

// // Nav.jsx

// const Nav = ({ onLoginButtonClick }) => {
//   return (
//     <Header>
//       <Buttons>
//         {/* Trigger onLoginButtonClick function when LoginButton is clicked */}
//         <LoginButton onClick={onLoginButtonClick}>로그인</LoginButton>
//       </Buttons>
//       {/* Your other navigation elements */}
//     </Header>
//   );
// };

// const Nav = () => {
// 	return (
// 		<Header>
// 			<Buttons>
// 				<Clock />
// 				<SignUpButton>회원가입</SignUpButton>
//         <LoginButton>로그인</LoginButton>
// 			</Buttons>
//     	<Navbar>
// 				<TextBox>
// 					<Text>입원/퇴원 관리</Text>
// 					<Text>동물등록</Text>
// 					<Text>공지사항</Text>
// 				</TextBox>
// 			</Navbar>
//     </Header>
// 	)
// }

// // App.jsx

// function App() {
//   const [showLogin, setShowLogin] = useState(false);

//   const handleLoginButtonClick = () => {
//     setShowLogin(true);
//   };

//   return (
//     <>
//       <GlobalStyle />
//       <Nav onLoginButtonClick={handleLoginButtonClick} />
//       {showLogin && <Login />}
//       <Signup />
//       <Footer />
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <GlobalStyle />
//       <Nav />
//       <Login />
//       <Signup />
//       <Footer />
//       {/* 여기밑에 라우터가 와요  */}
//     </>
//   );
// }

// // Nav.jsx

// const Nav = ({ onLoginButtonClick, isLoggedIn }) => {
//   return (
//     <Header>
//       <Buttons>
//         <Clock />
//         <SignUpButton>회원가입</SignUpButton>
//         {/* Conditionally render LoginButton based on isLoggedIn state */}
//         {!isLoggedIn ? (
//           <LoginButton onClick={onLoginButtonClick}>로그인</LoginButton>
//         ) : (
//           <LoginButton onClick={onLogoutButtonClick}>로그아웃</LoginButton>
//         )}
//       </Buttons>
//       {/* Your other navigation elements */}
//     </Header>
//   );
// };

// // App.jsx

//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLoginButtonClick = () => {
//     // Logic for handling login, then set isLoggedIn to true upon successful login
//     setIsLoggedIn(true);
//   };

//   const handleLogoutButtonClick = () => {
//     // Logic for handling logout, then set isLoggedIn to false upon successful logout
//     setIsLoggedIn(false);
//   };

//   return (
//     <>
//       <GlobalStyle />
//       <Nav onLoginButtonClick={handleLoginButtonClick} isLoggedIn={isLoggedIn} />
//       <Login />
//       <Signup />
//       <Footer />
//     </>
//   );
// }

// // Nav.jsx
// import React from 'react';
// import styled from 'styled-components';

// const Header = styled.header`
//   /* Your header styles */
// `;

// const Buttons = styled.div`
//   /* Your button container styles */
// `;

// const LoginButton = styled.button`
//   /* Your login button styles */
// `;

// const Nav = ({ isLoggedIn, onLoginButtonClick }) => {
//   const handleButtonClick = () => {
//     if (isLoggedIn) {
//       // Logic to handle logout
//       // Call the logout function here
//       // For now, let's assume there's a function called handleLogoutButtonClick
//       // passed as a prop from the parent component
//       handleLogoutButtonClick();
//     } else {
//       // Logic to handle login
//       // Call the login function here
//       onLoginButtonClick();
//     }
//   };

//   return (
//     <Header>
//       <Buttons>
//         <Clock />
//         <SignUpButton>회원가입</SignUpButton>
//         {/* Change the text of LoginButton based on the login state */}
//         <LoginButton onClick={handleButtonClick}>{isLoggedIn ? '로그아웃' : '로그인'}</LoginButton>
//       </Buttons>
//       {/* Your other navigation elements */}
//     </Header>
//   );
// };

// // 로그인 제안

// const Login = ({ onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     // your login logic
//     // on successful login, call onLogin prop
//     onLogin();
//   };

// // Nav 제안

// const Nav = ({ isLoggedIn, onLogout }) => {
//   return (
//     <Header>
//       <Buttons>
//         <Clock />
//         {isLoggedIn ? (
//           <LogoutButton onClick={onLogout}>로그아웃</LogoutButton>
//         ) : (
//           <>
//             <SignUpButton>회원가입</SignUpButton>
//             <LoginButton>로그인</LoginButton>
//           </>
//         )}
//       </Buttons>
//       <Navbar>
//         <TextBox>
//           <Text>입원/퇴원 관리</Text>
//           <Text>동물등록</Text>
//           <Text>공지사항</Text>
//         </TextBox>
//       </Navbar>
//     </Header>
//   );
// };

// export default Nav;

// // 이미 로그인 되었을 때 로그인 시 경고

// const Login = ({ onLogin, isLoggedIn }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     if (isLoggedIn) {
//       // If already logged in, show alert message and return
//       alert('이미 로그인되어 있습니다.');
//       return;
//     }
//     const auth = getAuth();
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
//       alert(`${email}님은 로그인하셨습니다`);
//       onLogin();
//     } catch (error) {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert(`등록되지 않은 사용자입니다`);
//     }
//     setEmail('');
//     setPassword('');
//   };

//   //로그아웃 기능

//   const App = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     const handleLogin = () => {
//       setIsLoggedIn(true);
//     };

//     const handleLogout = () => {
//       // Get the authentication instance
//       const auth = getAuth();

//       // Sign out the user
//       signOut(auth).then(() => {
//         // Update the state after successful sign-out
//         setIsLoggedIn(false);
//         console.log('User signed out successfully');
//       }).catch((error) => {
//         console.error('Error signing out:', error);
//       });
//     };

//     return (
//       <>
//         <GlobalStyle />
//         <Nav isLoggedIn={isLoggedIn} onLogout={handleLogout} />
//         <Login onLogin={handleLogin} />
//         <Signup onLogin={handleLogin} />
//         <Footer />
//       </>
//     );
//   };

// // 로그인 로그아웃 상태 관리

// const [isLoggedIn, setIsLoggedIn] = useState(false);

// const handleLogin = () => {
//   setIsLoggedIn(true);
// };

// const handleLogout = () => {
//   const auth = getAuth();

//   signOut(auth)
//     .then(() => {
//       setIsLoggedIn(false);
//       alert("로그아웃하셨습니다");
//     })
//     .catch((error) => {
//       alert("에러 발생", error);
//     });
// };

// // heeyongi@abc.com
// // Abcd1234*
