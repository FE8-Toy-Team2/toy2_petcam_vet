import { useState } from 'react'
import styled from 'styled-components'

const ClinicTodayList = ({ chartDatas }) => {
  const today = new Date(); // 현재 날짜 및 시간을 가져옴

  return (
    <TodayListContainer>
      <TodayListTitle>오늘의 진료 목록</TodayListTitle>
      <TodayListArea>
        {chartDatas.map(item => {
          const timestamp = item.clinic_today.toDate(); // 파이어베이스 타임스탬프 변환
          const hours = timestamp.getHours();           // 시간, 분을 문자열로
          const minutes = timestamp.getMinutes();
          const timeString = `${hours}시 ${minutes < 10 ? '0' : ''}${minutes}분`;
          
          // reservation_next의 날짜가 오늘인지 확인
          const isToday = timestamp.getDate() === today.getDate() &&
                         timestamp.getMonth() === today.getMonth() &&
                         timestamp.getFullYear() === today.getFullYear();

          // 오늘의 예약인 경우에만 출력
          if (isToday) {
            return (
              <TodayListItem key={item.id}>
                {item.name}({item.guardian})({timeString}) 
              </TodayListItem>
            );
          } else {
            return null; // 오늘의 예약이 아닌 경우 null 반환하여 출력하지 않음
          }
        })}
      </TodayListArea>
    </TodayListContainer>
  );
};

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
font-weight: var(--font-weight-bold);
font-family: "Pretendard";
`

const TodayListArea = styled.div`
  background-color: var(--color-gray-2);  
  border-radius: 10px;
  margin-top: 14px;  
  padding: 20px 10px;
  height: 100%;
  box-sizing: border-box; 
  border: 2px solid var(--color-black);
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
    background-color: var(--color-brown);
    color: #E3E2DE;
  }
`
