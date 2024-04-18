import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ClinicTodayList = ({ chartDatas, setSelectedChart }) => {
  return (
    <TodayListContainer>
      <TodayListTitle>오늘 진료</TodayListTitle>
      <TodayListArea>
        {chartDatas.map((item) => {
          const timestamp = item.clinic_today;
          const isToday =
            timestamp.split("T")[0] === dayjs().format("YYYY-MM-DD");
          const timeString = dayjs(timestamp).format("HH:mm");

          if (isToday) {
            return (
              <TodayListItem to={`/chart/${item.id}`} key={item.id}>
                <span>{item.name}</span>({item.guardian}&nbsp;/&nbsp;
                {timeString})
              </TodayListItem>
            );
          } else {
            return null;
          }
        })}
      </TodayListArea>
    </TodayListContainer>
  );
};

ClinicTodayList.propTypes = {
  selectedChart: PropTypes.any.isRequired,
  chartDatas: PropTypes.any.isRequired,
  setSelectedChart: PropTypes.func.isRequired,
};

export default ClinicTodayList;

const TodayListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0.3;
  flex-basis: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  @media (max-width: 992px) {
    min-width: 150px;
    margin-right: 5px;
  }
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
  @media (max-width: 576px) {
    margin-bottom: 20px;
  }
`;

const TodayListTitle = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: var(--font-weight-bold);
  font-family: "Pretendard";
`;

const TodayListArea = styled.div`
  background-color: var(--color-gray-2);
  border-radius: 10px;
  margin-top: 14px;
  padding: 20px 10px;
  height: 100%;
  border: 2px solid var(--color-black);
  overflow-y: auto;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 768px) {
    min-height: 200px;
    padding: 7px;
  }
  @media (max-width: 576px) {
    padding: 5px;
  }
`;
const TodayListItem = styled(Link)`
  display: block;
  font-size: 15px;
  padding: 5px 5px;
  margin-bottom: 3px;
  font-family: "Pretendard";
  cursor: pointer;
  word-break: keep-all;
  background-color: var(--color-gray-3);

  &:hover {
    background-color: var(--color-brown);
    color: #e3e2de;
  }

  span {
    font-weight: var(--font-weight-bold);
  }

  @media (max-width: 768px) {
    height: fit-content;
    flex-basis: 0;
    flex-grow: 1;
    text-align: center;
    margin: 5px;
  }
`;
