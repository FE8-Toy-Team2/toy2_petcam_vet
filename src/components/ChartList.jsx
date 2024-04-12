import { Link } from "react-router-dom";
import { styled } from "styled-components";
import fadb from "../db";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ChartNav = styled.nav`
  display: flex;
`;

const ChartNavUl = styled.ul`
  display: flex;
  gap: 2rem;
`;

const ChartNavLi = styled.li`
  padding: 1rem 2rem;
`;

const ChartListUl = styled.ul`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const ChartListLi = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const ListLiLeft = styled.div`
  display: flex;
  gap: 1rem;
`;

const ListLiRight = styled.div`
  display: flex;
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
                <div>동물이미지</div>
                <div>
                  <span>{pet.name}</span> <span>{pet.spic}</span>
                </div>
              </ListLiLeft>
              <ListLiRight>
                <div>
                  <button>입원</button>
                </div>
                <div>
                  <span>{pet.date}</span>
                  <span>{pet.time}</span>
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
