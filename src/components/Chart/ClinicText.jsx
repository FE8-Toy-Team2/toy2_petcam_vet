import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NormalButton } from '../Buttons';

const ClinicText = ({ chartDatas, updateChartData }) => {
  const [editedTextMap, setEditedTextMap] = useState({});
  const [timerMap, setTimerMap] = useState({});

  const handleChange = (id, newText) => {
    if (timerMap[id]) {
      clearTimeout(timerMap[id]);
    }
    setEditedTextMap((prevTextMap) => ({
      ...prevTextMap,
      [id]: newText,
    }));
    const timer = setTimeout(() => {
      updateChartData(id, { clinic_text: newText });
    }, 5000); // 5초 후에 변경 사항 저장
    setTimerMap((prevTimerMap) => ({
      ...prevTimerMap,
      [id]: timer,
    }));
  };

  useEffect(() => {
    return () => {
      Object.values(timerMap).forEach((timer) => clearTimeout(timer));
    };
  }, [timerMap]);

  const handleSaveButtonClick = () => {
    Object.entries(editedTextMap).forEach(([id, newText]) => {
      updateChartData(id, { clinic_text: newText });
    });
    setEditedTextMap({});
  };

  return (
    <TextContainer>
      <TextTitle>진료 내용</TextTitle>
      {chartDatas.map((item) => (
        <TextArea
          key={item.id}
          placeholder='진료 내용 입력'
          value={editedTextMap[item.id] || item.clinic_text}
          onChange={(e) => handleChange(item.id, e.target.value)}
        />
      ))}
      <NormalButton
        className='submit'
        type='submit'
        btnColor="var(--color-prime)"
        onClick={handleSaveButtonClick}
        style={{ display: 'block', position: 'absolute', right: 0 }}
      >등록
      </NormalButton>
    </TextContainer>
  );
};

export default ClinicText;

const TextContainer = styled.div`
  flex-grow: 1;
  box-sizing: border-box;
  flex-basis: 0;
  position: relative;

  @media (max-width: 900px) {
    min-width: 300px;
  }
`;

const TextTitle = styled.div`
  font-size: 20px;
  font-weight: var(--font-weight-bold);
  font-family: "Pretendard";
`;

const TextArea = styled.textarea`
  width: 100%;
  font-size: 16px;
  border-radius: 10px;
  margin-top: 14px;
  margin-bottom: 40px;
  padding: 20px;
  height: 100%;
  box-sizing: border-box;
  border: 2px solid var(--color-black);
  font-family: "Pretendard";
  resize: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;