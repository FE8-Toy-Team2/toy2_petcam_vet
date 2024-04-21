import { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ClinicEditPhotoAndChart = ({ selectedChart, setSelectedChart }) => {
  const [timerMap, setTimerMap] = useState({});
  const [showSavedMessage, setShowSavedMessage] = useState(false);
  const [data, setData] = useState(selectedChart);




  const handleChange = (e, isChecked = undefined) => {
    // if (timerMap[id]) {
    //   clearTimeout(timerMap[id]);
    // }

    const { name, value, checked } = e.target;
    const temp = {
      ...data,
      [name]: checked ? isChecked : value,
    };

    setSelectedChart(temp);
    setData(temp);
  };

  useEffect(() => {
    return () => {
      Object.values(timerMap).forEach((timer) => clearTimeout(timer));
    };
  }, [timerMap]);

  useEffect(() => {
    setData(selectedChart);
  }, [selectedChart]);

  // const imageURL = `https://storage.googleapis.com/toy2-petcam-vet.appspot.com/images/${data.imageName}`;
  // const imageAltName = `${data.imageName}`;


  return (
    <PhotoAndChartContainer>
      {showSavedMessage && <SavedMessage>저장 완료!</SavedMessage>}
      <PhotoBox>
        {selectedChart && (
          <img src={data.image} alt={data.image} />
          // <img src={`https://firebasestorage.googleapis.com/v0/b/toy2-petcam-vet.appspot.com/o/images%2F${selectedChart.imageName}?alt=media`} alt={`${selectedChart.imageName}`} />
        )}
      </PhotoBox>
      <ChartDetails>
        <li>
          <span>보호자</span>
          <textarea
            placeholder="성명"
            name="guardian"
            value={data.guardian}
            onChange={handleChange}
          />
        </li>
        <li>
          <span>이름</span>
          <textarea
            placeholder="반려동물 이름"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </li>
        <li>
          <span>종</span>
          <textarea
            placeholder="종 이름"
            name="species"
            value={data.species}
            onChange={handleChange}
          />
        </li>
        <li>
          <span>성별</span>
          <label>
            ♂
            <input
              type="radio"
              name="sex"
              checked={data.sex}
              onChange={(e) => handleChange(e, true)}
            />
          </label>
          <label>
            ♀
            <input
              type="radio"
              name="sex"
              checked={!data.sex}
              onChange={(e) => handleChange(e, false)}
            />
          </label>
        </li>
        <li>
          <span>나이</span>
          <textarea
            style={{ width: "40px" }}
            placeholder="나이 기입"
            name="age"
            value={data.age}
            onChange={handleChange}
          />
          개월
        </li>
        <li>
          <span>체중</span>
          <textarea
            style={{ width: "40px" }}
            placeholder="체중 기입"
            name="weight"
            value={data.weight}
            onChange={handleChange}
          />
          kg
        </li>
        <li>
          <span>중성화</span>
          <label>
            O
            <input
              type="radio"
              name="neutering"
              checked={data.neutering}
              onChange={(e) => handleChange(e, true)}
            />
          </label>
          <label>
            X
            <input
              type="radio"
              name="neutering"
              checked={!data.neutering}
              onChange={(e) => handleChange(e, false)}
            />
          </label>
        </li>
      </ChartDetails>
    </PhotoAndChartContainer>
  );
};

ClinicEditPhotoAndChart.propTypes = {
  selectedChart: PropTypes.any.isRequired,
  setSelectedChart: PropTypes.func.isRequired,
};

export default ClinicEditPhotoAndChart;

const PhotoAndChartContainer = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 992px) {
    display: block;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

const SavedMessage = styled.span`
  position: absolute;
  top: -25px;
  right: -10px;
  color: red;
  font-size: var(--font-size-XS);
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
  flex-basis: 0;
  flex-grow: 0.54;

  img {
    height: 100%;

    @media (max-width: 992px) {
      border-radius: 10px;
    }
    @media (max-width: 768px) {
      border-radius: 10px;
    }
  }

  @media (max-width: 992px) {
    width: 100%;
    margin-bottom: 10px;
    background-color: transparent;
  }
  @media (max-width: 576px) {
    display: none;
  }
`;

const ChartDetails = styled.ul`
  flex-grow: 1;
  flex-basis: 0;

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
    padding: 0 5px;
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
