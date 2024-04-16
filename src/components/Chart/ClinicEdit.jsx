import styled from 'styled-components'
import ClinicEditTimer from './ClinicEditTimer'
import ClinicEditPhotoAndChart from './ClinicEditPhotoAndChart'
import ClinicEditReservation from './ClinicEditReservation'
import { useEffect } from 'react'



const ClinicEdit = ({ selectedChart, setSelectedChart }) => {

  useEffect(() => {
    console.log("please!!!!!!!!!!!!!!!", selectedChart)
  }, [selectedChart])

  return (
    <EditContainer>
      <EditTitle>차트</EditTitle>
      <EditArea>
        <ClinicEditTimer />
        <p>프로필</p>
        <ClinicEditPhotoAndChart
          selectedChart={selectedChart}
          setSelectedChart={setSelectedChart}
        />
        <p>예약</p>
        <ClinicEditReservation
          selectedChart={selectedChart}
          setSelectedChart={setSelectedChart}
        />
      </EditArea>
    </EditContainer>
  )
}

export default ClinicEdit

const EditContainer = styled.div`  
  flex-grow: 1;
  margin-right: 20px;
  flex-basis: 0;

  @media (max-width: 900px) {
    min-width: 300px;
    margin-right: 5px;
  }
`

const EditTitle = styled.div`
  font-size: 20px;
  font-weight: var(--font-weight-bold);  
`

const EditArea = styled.div`
  background-color: var(--color-gray-2);
  border-radius: 10px;
  margin-top: 14px;  
  padding: 20px 20px;
  height: 100%;
  box-sizing: border-box;
  border: 2px solid var(--color-black);  
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