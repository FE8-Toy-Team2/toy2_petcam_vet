import { useState } from 'react'
import styled from 'styled-components'

const ClinicEditReservation = ({ chartDatas }) => {

  // const [admitToHospital, setAdmitToHospital] = useState(false)
  // const [calendarButton, setCalendarButton] = useState(false)
  const [chartData, setChartData] = useState(chartDatas);

  const handleAdmitToHospitalChange = (index, newAdmitToHospital) => {
    const updatedChartDatas = [...chartDatas];
    updatedChartDatas[index].admit_to_hospital = newAdmitToHospital;
    setChartData(updatedChartDatas);
  };

  const handleReservationChange = (index, newReservationNext) => {    
    const updatedChartDatas = [...chartDatas];
    updatedChartDatas[index].reservation_next = newReservationNext;
    setChartData(updatedChartDatas);
  };

  function getKoreanDateTime(timestamp) {
    const koreanTime = new Date(timestamp.toDate());
    const year = koreanTime.getFullYear();
    const month = String(koreanTime.getMonth() + 1).padStart(2, '0');
    const day = String(koreanTime.getDate()).padStart(2, '0');
    const hours = String(koreanTime.getHours()).padStart(2, '0');
    const minutes = String(koreanTime.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`
  }

  function getKoreanDate(timestamp) {
    const koreanTime = new Date(timestamp.toDate());
    const year = koreanTime.getFullYear();
    const month = String(koreanTime.getMonth() + 1).padStart(2, '0');
    const day = String(koreanTime.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }


  return (

    <>
      {chartDatas.map((item, index) => (
        <ReservationContainer key={index}>
          <ul>
            <li style={{ width: '110px', fontWeight: '700' }}>다음 진료 예약</li>
            <li>
              <input
                type='datetime-local'
                value={getKoreanDateTime(item.reservation_next)}
                onChange={(e) => handleReservationChange(index, e.target.value)}
              />
            </li>

          </ul>
          <ul>
            <li style={{ width: '110px', fontWeight: '700' }}>입원 수속</li>
            <label>
              O
              <input
                type='radio'
                name='AdmitToHospital'
                checked={item.admit_to_hospital === true}
                onChange={() => handleAdmitToHospitalChange(index, true)}
              />
            </label>
            <label>
              X
              <input type='radio'
                name='AdmitToHospital'
                checked={item.admit_to_hospital === false}
                onChange={() => handleAdmitToHospitalChange(index, false)} />
            </label>
          </ul>
          {item.admit_to_hospital && (
            <ul>
              <li style={{ width: '110px', fontWeight: '700' }}>입원 기간</li>
              <label>
                입원일:
                <input type="date"
                  value={getKoreanDate(item.admit_to_hospital_in)}
                />&nbsp;/&nbsp;
              </label>
              <label>
                퇴원일:
                <input type="date"
                  value={getKoreanDate(item.admit_to_hospital_out)}
                />
              </label>
            </ul>
          )}
        </ReservationContainer >
      ))}
    </>
  )
}




export default ClinicEditReservation

const ReservationContainer = styled.div`

input  {
  font-family: "Prentendard";  
  background-color: #EEEEEE;
  border: 1px solid #3D3939;
  font-size: 14px;
}

input:focus{
  background-color: #ffffff;
}

input[type='datetime-local'] {
  padding: 0 5px;
  border: none;
  font-size: 15px;
  background-color: #D9D9D9;
}

input[type='date']{
  margin: 0 5px;
  padding: 0 5px;
  border: none;
  font-size: 15px;
  background-color: #D9D9D9;
}

input[type='radio']{
  margin-right: 15px;
  
}

ul{
  display: flex;  
  align-items: center;
  margin-bottom: 10px;
}

li {
  height: 25px;  
  display: flex;
  align-items: center;
}
  `
