import React from 'react'
import styled from 'styled-components'

const ClinicEditTimer = () => {
  return (
    <TimerContainer>
      <TimerButtons style={{ backgroundColor: '#FF8484' }} className='start-button'>시작</TimerButtons>
      <TimerButtons style={{ backgroundColor: '#85E0A3' }} className='stop-button'>종료</TimerButtons>
      <TimeBox>00:00</TimeBox>
    </TimerContainer>
  )
}

export default ClinicEditTimer

const TimerContainer = styled.div`  
  height: 25px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  position: relative;
`

const TimerButtons = styled.button`
margin-right: 3px;
width: 50px;
height: 25px;
font-family: "Pretendard";
border: none;
font-weight: 700;

&:hover{
  filter: brightness(0.9);
}
`

const TimeBox = styled.div`
padding: 0 10px;
height: 100%;
flex-grow: 1;
background-color: #D9D9D9;
display: flex;
align-items: center;
justify-content: center;
`