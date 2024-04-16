import styled from 'styled-components'
import dayjs from 'dayjs'
// import React from 'react'
import PropTypes from 'prop-types';

const ClinicTodayList = ({ chartDatas, setSelectedChart }) => {

  return (
    <TodayListContainer>
      <TodayListTitle>오늘 진료</TodayListTitle>
      <TodayListArea>
        {chartDatas.map(item => {
          const timestamp = item.clinic_today
          const isToday = timestamp.split("T")[0] === dayjs().format("YYYY-MM-DDTHH:mm").split("T")[0]
          const timeString = dayjs().format("HH:mm 예약")// `${hours}:${minutes < 10 ? '0' : ''}${minutes} 예약`;

          if (isToday) {
            return (
              <TodayListItem key={item.id} onClick={() => setSelectedChart(item)}>
                <span>{item.name}</span>({item.guardian}&nbsp;/&nbsp;{timeString})
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

ClinicTodayList.propTypes = {
  selectedChart: PropTypes.any.isRequired,
  chartDatas: PropTypes.any.isRequired,
  setSelectedChart: PropTypes.func.isRequired,
};

export default ClinicTodayList

const TodayListContainer = styled.div`
  flex-grow: 0.5;
  margin-right: 20px;
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

  span {
    font-weight: var(--font-weight-bold);
  }
`
