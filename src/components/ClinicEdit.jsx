import React from 'react'
import styled from 'styled-components'
import ClinicEditTimer from './ClinicEditTimer'
import PhotoAndChart from './PhotoAndChart'
import Reservation from './Reservation'

const ClinicEdit = () => {
  return (
    <EditContainer>
      <EditTitle>차트</EditTitle>
      <EditArea>
        <ClinicEditTimer />
        <p>프로필</p>
        <PhotoAndChart />
        <p>예약</p>
        <Reservation />
      </EditArea>
    </EditContainer>
  )
}

export default ClinicEdit

const EditContainer = styled.div`  
  flex-grow: 1;
  margin-right: 30px;
  flex-basis: 0;

  @media (max-width: 900px) {
    min-width: 300px;
    margin-right: 5px;
  }
`

const EditTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  font-family: "Pretendard";
`

const EditArea = styled.div`
  background-color: #EEEEEE;
  border-radius: 10px;
  margin-top: 14px;  
  padding: 20px 20px;
  height: calc(100% - 34px);
  box-sizing: border-box;
  border: 2px solid #3D3939;
  font-family: "Pretendard";

  p{
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 700;
  }
  `