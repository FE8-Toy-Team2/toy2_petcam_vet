import React from 'react'
import styled from 'styled-components'

const ClinicEditReservation = () => {
  return (
    <ReservationContainer>
      <ul>
        <li style={{ width: '100px', fontWeight: '700' }}>진료 예약일</li>
        <label><input type="datetime-local" /></label>
      </ul>
      <ul>
        <li style={{ width: '100px', fontWeight: '700' }}>입원 수속</li>
        <label>
          O<input type='radio' name='AdmitToHospital' />
          X<input type='radio' name='AdmitToHospital' checked />
        </label>
      </ul>
      <ul>
        <li style={{ width: '100px', fontWeight: '700' }}>입원 기간</li>
        <label>
          입원일:<input type="date" />&nbsp;/&nbsp;
          퇴원일:<input type="date" />
        </label>
      </ul>
    </ReservationContainer >
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

input[type='date']{
  margin: 0 10px;
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
