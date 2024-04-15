import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ClinicText = ({ chartDatas, updateChartData, onSaveButtonClick }) => {
  const [textMap, setTextMap] = useState({});
  const [timerMap, setTimerMap] = useState({});

  useEffect(() => {
    // 컴포넌트가 언마운트될 때 타이머를 정리합니다.
    return () => {
      Object.values(timerMap).forEach((timer) => clearTimeout(timer));
    };
  }, [timerMap]);

  const handleChange = (id, newText) => {
    // 이전에 설정된 타이머가 있으면 취소합니다.
    if (timerMap[id]) {
      clearTimeout(timerMap[id]);
    }

    // 변경된 텍스트를 상태에 업데이트합니다.
    setTextMap((prevTextMap) => ({
      ...prevTextMap,
      [id]: newText,
    }));

    // 변경 사항을 저장하는 타이머를 시작합니다.
    const timer = setTimeout(() => {
      updateChartData(id, { clinic_text: newText });
    }, 5000); // 10분 후에 변경 사항 저장

    // 타이머를 상태에 저장합니다.
    setTimerMap((prevTimerMap) => ({
      ...prevTimerMap,
      [id]: timer,
    }));
  };

  return (
    <TextContainer>
      <TextTitle>진료 내용</TextTitle>
      {chartDatas.map((item) => (
        <TextArea
          key={item.id}
          placeholder="진료 내용 입력"
          value={textMap[item.id] || item.clinic_text}
          onChange={(e) => handleChange(item.id, e.target.value)}
        />
      ))}
    </TextContainer>
  );
};

export default ClinicText;


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