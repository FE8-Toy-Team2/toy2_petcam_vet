import styled from "styled-components";
import ClinicEditTimer from "./ClinicEditTimer";
import ClinicEditPhotoAndChart from "./ClinicEditPhotoAndChart";
import ClinicEditReservation from "./ClinicEditReservation";
import { useEffect } from "react";
import PropTypes from "prop-types";

const ClinicEdit = ({ selectedChart, setSelectedChart }) => {
  useEffect(() => {
    console.log("웩! 너무 힘듭니다", selectedChart);
  }, [selectedChart]);

  return (
    <EditContainer>
      <EditTitle>차트</EditTitle>
      <EditArea>
        <ClinicEditTimer />
        <p>프로필</p>
        <ClinicEditPhotoAndChart
          selectedChart={selectedChart}
          setSelectedChart={setSelectedChart}
        />
        <p>예약</p>
        <ClinicEditReservation
          selectedChart={selectedChart}
          setSelectedChart={setSelectedChart}
        />
      </EditArea>
    </EditContainer>
  );
};

ClinicEdit.propTypes = {
  selectedChart: PropTypes.any.isRequired,
  setSelectedChart: PropTypes.func.isRequired,
};

export default ClinicEdit;

const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 0;
  width: 100%;

  @media (max-width: 992px) {
    min-width: 300px;
    margin-right: 5px;
  }
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
  @media (max-width: 576px) {
    margin-bottom: 20px;
  }
`;

const EditTitle = styled.div`
  font-size: var(--font-size-XL);
  font-weight: var(--font-weight-bold);
`;
const EditArea = styled.div`
  width: 100%;
  background-color: var(--color-gray-2);
  border-radius: 10px;
  margin-top: 14px;
  padding: 20px 20px;
  height: 100%;
  box-sizing: border-box;
  border: 2px solid var(--color-black);
  overflow-y: auto;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  p {
    margin-bottom: 20px;
    font-size: var(--font-size-XL);
    font-weight: var(--font-weight-bold);
  }

  @media (max-width: 576px) {
    padding: 10px;
  }
`;
