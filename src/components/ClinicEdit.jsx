import styled from 'styled-components'
import ClinicEditTimer from './ClinicEditTimer'
import ClinicEditPhotoAndChart from './ClinicEditPhotoAndChart'
import ClinicEditReservation from './ClinicEditReservation'
import { useState } from 'react'



const ClinicEdit = ({ chartDatas, updateChartData }) => {
  const [savedMessageVisible, setSavedMessageVisible] = useState(false);


  const handleSaved = () => {
    setSavedMessageVisible(true);
    setTimeout(() => {
      setSavedMessageVisible(false);
    }, 3000); // 3초 후에 메시지 사라짐
  };

  return (
    <EditContainer>
      <EditTitle>차트</EditTitle>
      <EditArea>
        <ClinicEditTimer />
        <p>프로필</p>
        <ClinicEditPhotoAndChart 
        chartDatas={chartDatas} 
        updateChartData={updateChartData}
        onSaved={handleSaved}
        />
        <p>예약</p>
        <ClinicEditReservation chartDatas={chartDatas} updateChartData={updateChartData} />
      </EditArea>
       {savedMessageVisible && <SavedMessage>저장 완료!</SavedMessage>}
    </EditContainer>
  )
}

export default ClinicEdit

const EditContainer = styled.div`  
  flex-grow: 1;
  margin-right: 30px;
  flex-basis: 0;
  overflow: hidden;

  @media (max-width: 900px) {
    min-width: 300px;
    margin-right: 5px;
  }
`

const EditTitle = styled.div`
  font-size: 20px;
  font-weight: var(--font-weight-bold);
  font-family: "Pretendard";
`

const EditArea = styled.div`
  background-color: var(--color-gray-2);
  border-radius: 10px;
  margin-top: 14px;  
  padding: 20px 20px;
  height: 100%;
  box-sizing: border-box;
  border: 2px solid var(--color-black);
  font-family: "Pretendard";
  overflow-y: auto;
  -ms-overflow-style: none;
  &::-webkit-scrollbar{
    display: none;
  }

  p{
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: var(--font-weight-bold);
  }
  `