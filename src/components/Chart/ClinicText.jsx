import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ClinicText = ({ selectedChart, setSelectedChart }) => {
  const [data, setData] = useState(selectedChart);

  const handleChange = (e) => {
    const temp = { ...data, clinic_text: e.target.value }
    setData(temp)
    setSelectedChart(temp)
  };

  useEffect(() => { setData(selectedChart) }, [selectedChart])

  return (
    <TextContainer>
      <TextTitle>진료 내용</TextTitle>
      <TextArea
        placeholder='진료 내용 입력'
        value={data.clinic_text}
        onChange={handleChange}
      />
    </TextContainer>
  );
};

ClinicText.propTypes = {
  selectedChart: PropTypes.any.isRequired,
  setSelectedChart: PropTypes.func.isRequired,
};

export default ClinicText;

const TextContainer = styled.div`
  flex-grow: 1;
  box-sizing: border-box;
  flex-basis: 0;
  position: relative;

  @media (max-width: 992px) {
    min-width: 300px;
  }
  @media (max-width: 768px){
    height: 500px;
  }
  @media (max-width: 576px){
    height: 300px;
  }
`;

const TextTitle = styled.div`
  font-size: 20px;
  font-weight: var(--font-weight-bold);  
`;

const TextArea = styled.textarea`
  width: 100%;
  line-height: 1.55;
  font-size: 16px;
  border-radius: 10px;
  margin-top: 14px;
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