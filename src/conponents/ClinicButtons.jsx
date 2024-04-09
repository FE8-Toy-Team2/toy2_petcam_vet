import React from 'react'
import styled from 'styled-components'


const ClinicButtons = () => {
  return (
    <ClinicButtonArea>
      <CancelButton>취소</CancelButton>
      <ResetButton>리셋</ResetButton>
      <SubmitButton>등록</SubmitButton>
    </ClinicButtonArea>
  )
}

export default ClinicButtons

const ClinicButtonArea = styled.div`
  background-color: red;
  display: flex;  
  `
const CancelButton = styled.button`
  background-color: orange
  `
const ResetButton = styled.button`
  background-color: orange
  `
const SubmitButton = styled.button`
  background-color: orange;
  `