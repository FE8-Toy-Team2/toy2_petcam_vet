import React from 'react'
import styled from 'styled-components'


const ClinicButtons = () => {
  return (
    <ClinicButtonArea>
      <CancelButton className='cancel'>취소</CancelButton>
      <ResetButton className='reset'>리셋</ResetButton>
      <SubmitButton type='submit'>등록</SubmitButton>
    </ClinicButtonArea>
  )
}



export default ClinicButtons

const ClinicButtonArea = styled.div`
  background-color: red;
  display: flex;  
  max-width: 1440px;
  margin: auto;
  position: relative;
  margin-top: 40px;
  `
const CancelButton = styled.button`
  background-color: #E3E2DE;
  width: 150px;
  height: 50px;
  border-radius: 10px;
  border: none;
  margin-right: 9px;
  font-size: 22px;
  cursor: pointer;
  font-weight: 700;
  transition: 0.3s;
  font-family: "Pretendard";

  &:hover{
    background-color: #504239;
    color: #E3E2DE;
  }
  `
const ResetButton = styled.button`
  background-color: #E3E2DE;
  width: 150px;
  height: 50px;
  border-radius: 10px;
  border: none;
  font-size: 22px;
  cursor: pointer;
  font-weight: 700;
  transition: 0.3s;
  font-family: "Pretendard";

&:hover{
  background-color: #504239;
  color: #E3E2DE;
}
  `
const SubmitButton = styled.button`
  background-color: #FFCD29;  
  width: 150px;
  height: 50px;
  border-radius: 10px;
  border: none;
  position: absolute;
  right: 0;
  font-size: 22px;
  cursor: pointer;
  font-weight: 700;
  transition: 0.3s;
  font-family: "Pretendard";

&:hover{
  background-color: #504239;
  color: #E3E2DE;
}
  `

