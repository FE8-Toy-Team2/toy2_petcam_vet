import { useEffect, useState } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import PropTypes from 'prop-types';


const ClinicEditReservation = ({ selectedChart, setSelectedChart }) => {
  const [data, setData] = useState(selectedChart)

  useEffect(() => {
    setData(selectedChart)
    console.log("???", selectedChart)
  }, [selectedChart])

  const handleInputChanged = (e, isChecked = false) => {
    const temp = { ...data, [e.target.name]: e.target.checked ? isChecked : e.target.value }
    setData(temp)
    setSelectedChart(temp);
  };

  return (
    <ReservationContainer>
      <ul>
        <li style={{ width: '110px', fontWeight: '700' }}>다음 진료 예약</li>
        <li>
          <input
            type='datetime-local'
            name='reservation_next'
            value={dayjs(data.reservation_next).format('YYYY-MM-DDTHH:mm')}
            onChange={handleInputChanged}
          />
        </li>
      </ul>
      <ul>
        <li style={{ width: '110px', fontWeight: '700' }}>입원 수속</li>
        <label>
          O
          <input
            type='radio'
            name='admit_to_hospital'
            checked={data.admit_to_hospital}
            onChange={(e) => handleInputChanged(e, true)}
          />
        </label>
        <label>
          X
          <input type='radio'
            name='admit_to_hospital'
            checked={!data.admit_to_hospital}
            onChange={(e) => handleInputChanged(e, false)} />
        </label>
      </ul>
      {data.admit_to_hospital && (
        <ul>
          <li style={{ width: '110px', fontWeight: '700' }}>입원 기간</li>
          <label>
            입원:
            <input type="date"
              name="admit_to_hospital_in"
              value={data.admit_to_hospital_in}
              onChange={handleInputChanged}

            />&nbsp;/&nbsp;
          </label>
          <label>
            퇴원:
            <input type="date"
              name="admit_to_hospital_out"
              value={data.admit_to_hospital_out}
              onChange={handleInputChanged}

            />
          </label>
        </ul>
      )}
    </ReservationContainer>
  )
}

ClinicEditReservation.propTypes = {
  selectedChart: PropTypes.any.isRequired,
  setSelectedChart: PropTypes.func.isRequired,
};

export default ClinicEditReservation

const ReservationContainer = styled.div`

input  {
  font-family: "Prentendard";  
  background-color: var(--color-gray-2);
  border: 1px solid var(--color-black);
  font-size: 14px;
}

input:focus{
  background-color: #ffffff;
}

input[type='datetime-local'] {
  padding: 0 5px;
  border: none;
  font-size: 15px;
  background-color: var(--color-gray-3);
}

input[type='date']{
  margin: 0 5px;
  padding: 0 5px;
  border: none;
  font-size: 15px;
  background-color: var(--color-gray-3);
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
