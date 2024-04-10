import React from 'react'
import styled from 'styled-components'

const ClinicTodayList = () => {
  return (
    <TodayListContainer>
      <TodayListTitle>오늘의 진료 목록</TodayListTitle>
      <TodayListArea>
        <TodayListItem>내용(보호자명)</TodayListItem>
        <TodayListItem>내용(보호자명)</TodayListItem>
        <TodayListItem>내용(보호자명)</TodayListItem>
        <TodayListItem>내용(보호자명)</TodayListItem>
        <TodayListItem>내용(보호자명)</TodayListItem>
        <TodayListItem>내용(보호자명)</TodayListItem>
        <TodayListItem>내용(보호자명)</TodayListItem>
        <TodayListItem>내용(보호자명)</TodayListItem>
        <TodayListItem>내용(보호자명)</TodayListItem>
        <TodayListItem>내용(보호자명)</TodayListItem>
        <TodayListItem>내용(보호자명)</TodayListItem>
        <TodayListItem>내용(보호자명)</TodayListItem>
        <TodayListItem>내용(보호자명)</TodayListItem>
        <TodayListItem>내용(보호자명)</TodayListItem>
        <TodayListItem>내용(보호자명)</TodayListItem>
        <TodayListItem>내용(보호자명)</TodayListItem>
        <TodayListItem>내용(보호자명)</TodayListItem>
        <TodayListItem>내용(보호자명)</TodayListItem>
        <TodayListItem>내용(보호자명)</TodayListItem>
        <TodayListItem>내용(보호자명)</TodayListItem>
        <TodayListItem>내용(보호자명)</TodayListItem>
        <TodayListItem>내용(보호자명)</TodayListItem>
      </TodayListArea>
    </TodayListContainer>
  )
}

export default ClinicTodayList

const TodayListContainer = styled.div`
  flex-grow: 0.4;
  margin-right: 30px;
  flex-basis: 0;
  
  @media (max-width: 900px) {
    min-width: 150px;
    margin-right: 5px;
  }
`

const TodayListTitle = styled.div`
font-size: 20px;
font-weight: 700;
font-family: "Pretendard";
`

const TodayListArea = styled.div`
  background-color: #EEEEEE;  
  border-radius: 10px;
  margin-top: 14px;  
  padding: 20px 10px;
  height: calc(100% - 34px);
  box-sizing: border-box; 
  border: 2px solid #3D3939;
  overflow-y: auto;
  -ms-overflow-style: none;
  &::-webkit-scrollbar{
    display: none;
  }
`
const TodayListItem = styled.a`
  display: block;
  font-size: 15px;
  padding: 10px 5px;
  font-family: "Pretendard";
  cursor: pointer;

  &:hover {
    background-color: #504239;
    color: #E3E2DE;
  }
`