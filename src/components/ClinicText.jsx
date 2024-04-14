import React, { useState } from 'react'
import styled from 'styled-components'

const ClinicText = ({ chartDatas }) => {

  const [clinicText, setClinicText] = useState(chartDatas)
  const handleChange = (e) => {
    setClinicText(e.target.chartDatas)
  }


  return (
    <TextContainer>
      <TextTitle>진료 내용</TextTitle>
      {chartDatas.map(item => (
        <TextArea
          key={item.id}
          placeholder='진료 내용 입력'
          // value={item.clinic_text}
          // onChange={handleChange}
        >{item.clinic_text}</TextArea>
      ))}
    </TextContainer>
  )
}

export default ClinicText

const TextContainer = styled.div`
  flex-grow: 1;  
  box-sizing: border-box;
  flex-basis: 0;  

  @media (max-width: 900px) {
    min-width: 300px;
  }
`

const TextTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  font-family: "Pretendard";
`

const TextArea = styled.textarea`
  width: 100%;
  font-size: 16px;
  border-radius: 10px;
  margin-top: 14px;  
  padding: 20px;
  height: calc(100% - 34px);
  box-sizing: border-box;  
  border: 2px solid #3D3939;
  font-family: "Pretendard";  
  resize: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar{
    display: none;
  }
`