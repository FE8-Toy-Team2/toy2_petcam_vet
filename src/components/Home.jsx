import styled from "styled-components";
import HomeAnnouncement from "./HomeAnnouncement";
import List from "./ChartList/List";

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: #f6f6f6;
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

function Home() {
  return (
    <Main>
      <MainContent>
        <Title>안녕하세요, Pet캠 동물병원 입니다!</Title>
        <MainGrid>
          <div>공지사항 보러가기</div>
          <div>동물등록 하러가기</div>
          <div>차트 리스트 보러가기</div>
        </MainGrid>
        <HomeAnnouncement />
      </MainContent>
    </Main>
  );
}

export default Home;
