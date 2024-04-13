import React from 'react'
import styled from 'styled-components';
import "./common.css";

const Footer = () => {
	return (
		<FooterContainer>
			<Heading>패스트캠퍼스 부트캠프<br/>
				토이프로젝트 2조</Heading>
			<TextContainer>
				<Text>김희준(조장)</Text>
				<Text>김송희</Text>
				<Text>김희용</Text>
				<Text>변희준</Text>
				<Text>임혜정</Text>        
			</TextContainer>			
		</FooterContainer>
	)
}

export default Footer


const FooterContainer = styled.footer`
	width: 100%;
	height: 80px;
	background-color: var(--darkheader);	
	display: flex;
	padding: 20px 30px;
`
const Heading = styled.div`
	font-family: var(--pre-bold);
	font-size: 13px;
	color: var(--darkgray);
	line-height: 17px;
`
const TextContainer = styled.div`
  display: flex;
  margin-left: 80px;
`
const Text = styled.p`
  font-family: var(--pre-reg); 
  color: var(--darkgray);
  margin: 0 15px;
  font-size: 12px;
	transition: .2s;
	cursor: pointer;

	&:hover {
		color: #fff
	}
`
