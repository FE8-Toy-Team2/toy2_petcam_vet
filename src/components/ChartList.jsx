import { Link } from "react-router-dom";
import { styled } from "styled-components";
import fadb from "../db";
import { SmallButton } from "./Buttons.jsx";

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const ChartNav = styled.nav`
  width: 90%;
  margin-top: 2rem;

  border-bottom: 1px solid red;
  display: flex;
`;

const ChartNavUl = styled.ul`
  display: flex;
  gap: 2rem;
`;

const ChartNavLi = styled.li`
  padding: 0.5rem 1rem;
`;

const ChartListUl = styled.ul`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ChartListLi = styled.li`
  height: 3rem;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: white;

  border: 1px solid rgba(51, 51, 51, 0.2);
  border-radius: 10px;
  box-shadow: 1px 1px 10px rgba(51, 51, 51, 0.2);
`;

const ListLiLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ListLiLeftImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  box-shadow: 1px 1px 10px rgba(51, 51, 51, 0.2);
`;

const ListLiRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

function ChartList() {
  return (
    <>
      <Container>
        <ChartNav>
          <ChartNavUl>
            <ChartNavLi>전체보기</ChartNavLi>
            <ChartNavLi>당일진료</ChartNavLi>
            <ChartNavLi>퇴원</ChartNavLi>
            <ChartNavLi>입원</ChartNavLi>
          </ChartNavUl>
        </ChartNav>

        <div>{fadb.length} 마리 등록 됨</div>
        <ChartListUl>
          {fadb.map((pet) => (
            <ChartListLi key={pet.id}>
              <ListLiLeft>
                <ListLiLeftImg
                  src="../public/image/title_logo.gif"
                  alt="테스트 이미지"
                />
                <div>
                  <div>{pet.name}</div> <div>{pet.spic}</div>
                </div>
              </ListLiLeft>
              <ListLiRight>
                {<SmallButton btnColor="#FFC603">{pet.state}</SmallButton>}

                <div>
                  <div>{pet.date}</div>
                  <div>{pet.time}</div>
                </div>
              </ListLiRight>
            </ChartListLi>
          ))}
        </ChartListUl>
      </Container>
    </>
  );
}

export default ChartList;
