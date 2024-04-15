import { useState } from 'react';
import styled from 'styled-components';

const ClinicText = ({ chartDatas, updateChartData }) => {
  // 수정된 텍스트를 상태로 관리합니다.
  const [editedTextMap, setEditedTextMap] = useState({});

  const handleTextChange = (id, newText) => {
    // 변경된 텍스트를 editedTextMap 상태에 업데이트합니다.
    setEditedTextMap((prevEditedTextMap) => ({
      ...prevEditedTextMap,
      [id]: newText,
    }));
  };

  const handleSaveButtonClick = () => {
    // 수정된 텍스트만을 반영합니다.
    Object.entries(editedTextMap).forEach(([id, newText]) => {
      updateChartData(id, newText);
    });
    // 수정된 텍스트를 초기화합니다.
    setEditedTextMap({});
  };

  return (
    <TextContainer>
      <TextTitle>진료 내용</TextTitle>
      {chartDatas.map(item => (
        <TextArea
          key={item.id}
          placeholder='진료 내용 입력'
          value={editedTextMap[item.id] || item.clinic_text}
          onChange={(e) => handleTextChange(item.id, e.target.value)}
        />
      ))}
      <SaveButton onClick={handleSaveButtonClick}>저장</SaveButton>
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

const SaveButton = styled.button`
  background-color: #FFCD29;
  color: black;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
`;
