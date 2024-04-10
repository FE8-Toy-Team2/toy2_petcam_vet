import React from 'react'
import styled from 'styled-components'

const PhotoAndChart = () => {
  return (
    <>
      <PhotoAndChartContainer>
        <PhotoBox src="https://i.natgeofe.com/n/5f35194b-af37-4f45-a14d-60925b280986/NationalGeographic_2731043_3x4.jpg" />
        <Chart>
          <div>
            <span>보호자</span> <ChartTextArea placeholder='성명'></ChartTextArea>
          </div>
          <div>
            <span>이름</span> <textarea placeholder='반려동물 이름'></textarea>
          </div>
          <div>
            <span>종</span> <textarea placeholder='종 이름'></textarea>
          </div>
          <div>
            <span>성별</span> 남<input type='checkbox' /> 여<input type='checkbox' />
          </div>
          <div>
            <span>나이</span> <textarea placeholder='나이 기입'></textarea> 개월
          </div>
          <div>
            <span>체중</span> <textarea placeholder='체중 기입'>15</textarea> kg
          </div>
          <div>
          <span>중성화</span> X<input type='checkbox' /> O<input type='checkbox' />
          </div>
        </Chart>
      </PhotoAndChartContainer >
      <ReservationContainer>
        <div>진료 예약</div>
        <div>
          <div>입원 여부
            O<input type='checkbox' />
            X<input type='checkbox' />
          </div>

          <div>기간
            <div>언제부터</div>
            <div>언제까지</div>
          </div>
        </div>
      </ReservationContainer>
    </>
  )
}

export default PhotoAndChart

const PhotoAndChartContainer = styled.div`
  display: flex;
  background-color: rosybrown;
  `
const ReservationContainer = styled.div`

  `

const PhotoBox = styled.img`
  --width: 150px;
  width: var(--width);
  height: calc(var(--width) / 3 * 4);
  background-color: red;
  margin-right: 15px;
  `

const Chart = styled.ul`


  span{
    font-weight: 700;
  }
`


const ChartTextArea = styled.textarea`
border: none;
background-color: beige;


`
