import { useState, useEffect } from 'react';
import styled from 'styled-components';

const ClinicEditTimer = () => {
  const [timer, setTimer] = useState(0); // 타이머 상태
  const [isActive, setIsActive] = useState(false); // 타이머 활성화 여부

  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1); // 1초마다 타이머 증가
      }, 1000);
    } else {
      clearInterval(intervalId); // 타이머 멈춤
    }
    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 clearInterval
  }, [isActive]); // isActive가 변경될 때마다 useEffect 실행

  const toggleTimer = () => {
    setIsActive(!isActive); // 타이머 활성화 여부 토글
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <TimerContainer>
      <ToggleButton onClick={toggleTimer} isActive={isActive}>
        {isActive ? '진료 종료' : '진료 시작'}
      </ToggleButton>
      <TimeBox>{formatTime(timer)}</TimeBox>
    </TimerContainer>
  );
};

export default ClinicEditTimer;

const TimerContainer = styled.div`
  height: 25px;
  margin: 10px 0 30px 0;
  display: flex;
  align-items: center;
  position: relative;
`;

const ToggleButton = styled.button`
  min-width: 100px;  
  height: 100%;
  margin-right: 10px;
  font-family: "Pretendard";  
  font-weight: var(--font-weight-bold);
  border: none;
  background-color: ${({ isActive }) => (isActive ? '#FF8484' : '#85E0A3')};  
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
  }

  @media (max-width: 768px){
    flex-grow: 0.5;
    flex-basis: 0;
  }
  @media (max-width: 576px){
    flex-grow: 0.5;
    flex-basis: 0;
  }
`;

const TimeBox = styled.div`
  padding: 0 10px;
  height: 100%;
  flex-grow: 1;
  background-color: var(--color-gray-3);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px){
    flex-grow: 1;
    flex-basis: 0;
  }
  @media (max-width: 576px){
    flex-grow: 1;
    flex-basis: 0;
  }
`;
