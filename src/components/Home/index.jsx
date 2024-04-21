import styled from "styled-components";
import Announcement from "./Announcement";
import Chart from "./Chart";
import List from "../ChartList/List";

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

const MainContent = styled.section`
  width: 80%;
  margin-top: 5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  img {
    width: 100%;
    height: 30%;
    object-fit: cover;
  }
`;

const Title = styled.h2`
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 600;
`;

const MainGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  & > div {
    background-color: bisque;
    padding: 1rem;
  }
`;

const MainUnits = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 3rem;
  section {
    padding-left: 10%;
  }
  h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

function Home() {
  return (
    <Main>
      <MainContent>
        <img src="https://cdn.pixabay.com/photo/2018/04/23/14/38/dog-3344414_1280.jpg" alt="랜딩이미지" />
        <Title>안녕하세요, Pet캠 동물병원 입니다!</Title>
        {/* <MainGrid>
          <div>공지사항 보러가기</div>
          <div>동물등록 하러가기</div>
          <div>차트 리스트 보러가기</div>
        </MainGrid> */}
        <MainUnits>
          <Announcement />
          <Chart />
        </MainUnits>
      </MainContent>
    </Main>
  );
}

export default Home;
