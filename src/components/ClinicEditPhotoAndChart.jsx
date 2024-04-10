import React from 'react'
import styled from 'styled-components'

const ClinicEditPhotoAndChart = () => {
  return (
    <>
      <PhotoAndChartContainer>
        <PhotoBox>
          <img src="https://i.natgeofe.com/n/5f35194b-af37-4f45-a14d-60925b280986/NationalGeographic_2731043_3x4.jpg" />
        </PhotoBox>
        <Chart>
          <li>
            <span>보호자</span> <textarea placeholder='성명'></textarea>
          </li>
          <li>
            <span>이름</span> <textarea placeholder='반려동물 이름'></textarea>
          </li>
          <li>
            <span>종</span> <textarea placeholder='종 이름'></textarea>
          </li>
          <li>
            <span>성별</span> 남<input type='radio' name='sex' /> 여<input type='radio' name='sex' />
          </li>
          <li>
            <span>나이</span> <textarea placeholder='나이 기입'></textarea> 개월
          </li>
          <li>
            <span>체중</span> <textarea placeholder='체중 기입'></textarea> kg
          </li>
          <li>
            <span>중성화</span> O<input type='radio' name='TNR' /> X<input type='radio' name='TNR' />
          </li>
        </Chart>
      </PhotoAndChartContainer >
    </>
  )
}

export default ClinicEditPhotoAndChart

const PhotoAndChartContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  `
const PhotoBox = styled.div`
  --width: 240px;
  width: var(--width);
  height: var(--width);
  display: flex;
  justify-content: center;
  background-color: red;
  margin-right: 20px;
  border-radius: 10px;
  overflow: hidden;
  
  img{
    height: 100%;
  }
  `
const Chart = styled.ul`  
  width: 100%;

  li{
  display: flex;
  padding: 7px 0 4px 0;
  height: 22px;
  align-items: center;  
  border-bottom: 1px solid #3D3939;  
  }

  span{
    font-weight: 700;
    width: 60px;
  }

  textarea{
    border: none;
    height: 20px;
    background-color: #EEEEEE;
    margin-right: 10px;    
    font-family: "Pretendard";
    font-size: 16px;
    resize: none;
  }

  textarea:focus{
    background-color: #ffffff;
  }

  input {
    margin-right: 15px;    
    margin-top: -0.5px;
  }
`