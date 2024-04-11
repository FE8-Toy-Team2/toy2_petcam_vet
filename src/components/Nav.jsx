import React from 'react'
import styled from 'styled-components';
import "./common.css";

const Nav = () => {
	return (
		<Header >
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
	position: relative;
`
const Navbar = styled.div`
	width: 100%;
	height: 60px;
	top: 30px;
	background-color: #fff;
	position: absolute;
	display: flex;	

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