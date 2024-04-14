import { } from 'react'
import styled from 'styled-components'

const ClinicTodayList = ({ chartDatas }) => {
  return (
    <TodayListContainer>
      <TodayListTitle>오늘의 진료 목록</TodayListTitle>
      <TodayListArea>
        {chartDatas.map(item => {
          const timestamp = item.reservation_next.toDate(); // 파이어베이스 타임스탬프 변환
          const hours = timestamp.getHours();           // 시간, 분을 문자열로
          const minutes = timestamp.getMinutes();
          const timeString = `${hours}시 ${minutes < 10 ? '0' : ''}${minutes}분`;
          // 이름, 보호자, 시간 정보 표시하기
          return (
            <TodayListItem key={item.id}>
              {item.name}({item.guardian})({timeString}) 
            </TodayListItem>
          );
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