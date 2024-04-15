import React from 'react'
import styled from 'styled-components';
import "./common.css";
import Clock from './Clock';



const Nav = ({ isLoggedIn, onLogout }) => {
	return (
		<Header>
			<Buttons>
				<Clock />				
				<SignUpButton>회원가입</SignUpButton>
        {isLoggedIn ? (
          <Button onClick={onLogout}>로그아웃</Button>
        ) : (
          <Button>로그인</Button>
        )}       
			</Buttons>
    	<Navbar>
				<TextBox>
					<Text>입원/퇴원 관리</Text>
					<Text>동물등록</Text>
					<Text>공지사항</Text>
				</TextBox>
			</Navbar>
    </Header>
	)
}		

export default Nav

const Header = styled.header`
	width: 100%;
	height: 30px;
	background-color: var(--darkheader);
	position: fixed;	
`
const Buttons = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`
const SignUpButton = styled.p`
	color: var(--darkgray);
	font-size: 13px;
	padding-top: 3px;
	cursor: pointer;	
	transition: .3s;

	&:hover {
		color: #fff;
	}
`
const Button = styled.button`
	width: 60px;
	height: 20px;
	margin: 5px 20px;
	border-radius: 5px;
	border: none;
	background-color: var(--yellow);
	text-align: center;
	font-size: 13px;
	font-family: var(--pre-reg);
	cursor: pointer;
	transition: .3s;

	&:hover {
		background-color: var(--hoveryellow);
	}
	`	
const Navbar = styled.div`
	width: 100%;
	height: 60px;
	top: 30px;
	background-color: #fff;
	position: absolute;
	display: flex;
	box-shadow: 1px 1px 7px var(--darkgray);		

	&::before {
		content: "";
    display: inline-block;
    vertical-align: middle;
    width: 150px;
    margin-left: 30px;
    background: url("../img/petcam_logo.svg") no-repeat center center;
	}
`
const TextBox = styled.div`
	display: flex;
	margin-left: 40px;
`
const Text = styled.p`
	font-family: var(--pre-bold); 
	color: var(--darkheader);
	margin: auto 25px;
	font-size: 15px;
	cursor: pointer;

	&:hover {
    color: var(--yellow);
  }
`