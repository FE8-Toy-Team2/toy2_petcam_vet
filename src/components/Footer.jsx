import React from 'react'
import styled from 'styled-components';


const Footer = () => {
	return (
		<FooterContainer>
			<Heading>패스트캠퍼스 부트캠프<br/>
				토이프로젝트 2조</Heading>
			<TextContainer>
				<Text><u>김희준(조장)</u><br/>차트 리스트업<br/>네비 헤더</Text>
				<Text><u>김송희</u><br/>등록화면</Text>
				<Text><u>김희용</u><br/>네비 헤더/푸터<br/>로그인/회원가입</Text>
				<Text><u>변희준</u><br/>공지사항</Text>
				<Text><u>임혜정</u><br/>진료정보</Text>        
			</TextContainer>			
		</FooterContainer>
	)
}

export default Footer


const FooterContainer = styled.footer`
	width: 100%;
	height: 80px;
	background-color: var(--color-black);	
	display: flex;
	padding: 20px 30px;
`
const Heading = styled.div`
	font-family: var(--font-weight-bold);
	font-size: 13px;
	color: var(--color-darkgray);
	line-height: 17px;
`
const TextContainer = styled.div`
  display: flex;
  margin-left: 80px;
`
const Text = styled.p`
  font-family: var(--font-weight-light); 
  color: var(--color-darkgray);
  margin: 0 15px;
  font-size: 12px;
	line-height: 17px;

`
