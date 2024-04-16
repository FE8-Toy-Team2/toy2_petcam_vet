import { useState, useEffect } from 'react';
import styled from 'styled-components';

const ClinicEditPhotoAndChart = ({ chartDatas, updateChartData, onSaved }) => {
  const [editedData, setEditedData] = useState({});
  const [timerMap, setTimerMap] = useState({});
  const [showSavedMessage, setShowSavedMessage] = useState(false);

  const handleChange = (id, newData) => {
    if (timerMap[id]) {
      clearTimeout(timerMap[id]);
    }

    setEditedData(prevData => ({
      ...prevData,
      [id]: {
        ...prevData[id],
        ...newData
      }
    }));

    const timer = setTimeout(() => {
      updateChartData(id, newData);
      setShowSavedMessage(true);
      setTimeout(() => {
        setShowSavedMessage(false);
      }, 1500); // 1.5초 후에 메시지 사라짐
    }, 500);

    setTimerMap(prevTimerMap => ({
      ...prevTimerMap,
      [id]: timer,
    }));
  };

  useEffect(() => {
    return () => {
      Object.values(timerMap).forEach(timer => clearTimeout(timer));
    };
  }, [timerMap]);


  return (
    <PhotoAndChartContainer>
      {showSavedMessage && <SavedMessage>저장 완료!</SavedMessage>}
      <PhotoBox>
        <img src="https://i.natgeofe.com/n/5f35194b-af37-4f45-a14d-60925b280986/NationalGeographic_2731043_3x4.jpg" />
      </PhotoBox>
      {chartDatas.map((item, index) => (
        <ChartDetails key={index}>
          <li>
            <span>보호자</span>
            <textarea
              placeholder='성명'
              value={editedData[item.id]?.guardian || item.guardian}
              onChange={(e) => handleChange(item.id, { guardian: e.target.value })}
            />
          </li>
          <li>
            <span>이름</span>
            <textarea
              placeholder='반려동물 이름'
              value={editedData[item.id]?.name || item.name}
              onChange={(e) => handleChange(item.id, { name: e.target.value })}
            />
          </li>
          <li>
            <span>종</span>
            <textarea
              placeholder='종 이름'
              value={editedData[item.id]?.species || item.species}
              onChange={(e) => handleChange(item.id, { species: e.target.value })}
            />
          </li>
          <li>
            <span>성별</span>
            <label>
              남
              <input
                type='radio'
                name={`sex-${index}`}
                checked={editedData[item.id]?.sex === true || item.sex === true}
                onChange={() => handleChange(item.id, { sex: true })}
              />
            </label>
            <label>
              여
              <input
                type='radio'
                name={`sex-${index}`}
                checked={editedData[item.id]?.sex === false || item.sex === false}
                onChange={() => handleChange(item.id, { sex: false })}
              />
            </label>
          </li>
          <li>
            <span>나이</span>
            <textarea
              style={{ width: '40px' }}
              placeholder='나이 기입'
              value={editedData[item.id]?.age || item.age}
              onChange={(e) => handleChange(item.id, { age: e.target.value })}
            />
            개월
          </li>
          <li>
            <span>체중</span>
            <textarea
              style={{ width: '40px' }}
              placeholder='체중 기입'
              value={editedData[item.id]?.weight || item.weight}
              onChange={(e) => handleChange(item.id, { weight: e.target.value })}
            />
            kg
          </li>
          <li>
            <span>중성화</span>
            <label>
              O
              <input
                type='radio'
                name={`neutering-${index}`}
                checked={editedData[item.id]?.neutering === true || item.neutering === true}
                onChange={() => handleChange(item.id, { neutering: true })}
              />
            </label>
            <label>
              X
              <input
                type='radio'
                name={`neutering-${index}`}
                checked={editedData[item.id]?.neutering === false || item.neutering === false}
                onChange={() => handleChange(item.id, { neutering: false })}
              />
            </label>
          </li>
        </ChartDetails>
      ))}
    </PhotoAndChartContainer>
  );
};

export default ClinicEditPhotoAndChart;

const PhotoAndChartContainer = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 30px;
`;

const SavedMessage = styled.span`
  position: absolute;
  top: -25px;
  right: -10px;
  color: red;
  font-size: var(--font-size-XS);
  font-family: "Pretendard";
  font-weight: var(--font-weight-bold);
`;

const PhotoBox = styled.div`
  --width: 240px;
  width: var(--width);
  height: var(--width);
  display: flex;
  justify-content: center;
  background-color: var(--color-gray-3);
  margin-right: 20px;
  border-radius: 10px;
  overflow: hidden;

  img {
    height: 100%;
  }
`;

const ChartDetails = styled.ul`
  width: 100%;

  li {
    display: flex;
    padding: 7px 0 4px 0;
    height: 22px;
    align-items: center;
    border-bottom: 1px solid var(--color-black);
  }

  span {
    font-weight: var(--font-weight-bold);
    width: 60px;
  }

  textarea {
    border: none;
    height: 20px;
    background-color: var(--color-gray-3);
    margin-right: 5px;
    font-family: "Pretendard";
    font-size: 16px;
    resize: none;
  }

  textarea:focus {
    background-color: #ffffff;
  }

  input {
    margin-right: 15px;
    margin-top: -0.5px;
  }
`;
