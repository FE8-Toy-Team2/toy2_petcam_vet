import { useState } from 'react'
import styled from 'styled-components'
// import Calendar from 'react-calendar'


const ClinicEditReservation = ({ chartDatas }) => {

  const [admitToHospital, setAdmitToHospital] = useState(false)
  // const [calendarButton, setCalendarButton] = useState(false)

  // 체크박스를 넣어서 진료 예약 창 나오게 하기
  // https://hisoit.tistory.com/72 이거 참고
  // https://velog.io/@khy226/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%95%B1%EC%97%90-%EB%8B%AC%EB%A0%A5react-calendar-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0 이것도
  // 고민: https://momentjs.com/를 써보는 건 어떤지


  return (
    <>
    {chartDatas.map(item => (
      <ReservationContainer key={item.id}>
      <ul>
        <li style={{ width: '110px', fontWeight: '700' }}>다음 진료 예약</li>
        <li><input type='datetime-local' value={item.reservation_next} /></li>
      </ul>
      <ul>
        <li style={{ width: '110px', fontWeight: '700' }}>입원 수속</li>
        <label>
          O
          <input
            type='radio'
            name='AdmitToHospital'
            checked={item.admit_to_hospital === true}
            onChange={() => setAdmitToHospital(true)}
          />
        </label>
        <label>
          X
          <input type='radio'
            name='AdmitToHospital'
            checked={item.admit_to_hospital === false}
            onChange={() => setAdmitToHospital(false)} />
        </label>
      </ul>
      {item.admit_to_hospital && (
        <ul>
          <li style={{ width: '110px', fontWeight: '700' }}>입원 기간</li>
          <label>
            입원일:<input type="date" />&nbsp;/&nbsp;
          </label>
          <label>
            퇴원일:<input type="date" />
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
