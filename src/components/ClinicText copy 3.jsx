import { useState } from 'react';
import styled from 'styled-components';

const ClinicText = ({ chartDatas, updateChartData, handleSaveButtonClick }) => {
  // 텍스트를 수정할 때마다 변경된 내용을 상태로 관리합니다.
  const [editedText, setEditedText] = useState('');

  const handleChange = (id, newText) => {
    // 변경된 텍스트를 상태에 저장합니다.
    setEditedText(newText);
    // 변경된 텍스트를 업데이트 함수에 전달하여 업데이트합니다.
    updateChartData(id, newText);
  };

  return (
    <TextContainer>
      <TextTitle>진료 내용</TextTitle>
      {chartDatas.map(item => (
        <TextArea
          key={item.id}
          placeholder='진료 내용 입력'
          value={editedText || item.clinic_text} // 수정된 텍스트가 있으면 해당 텍스트를, 없으면 초기 값으로 item.clinic_text를 사용합니다.
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