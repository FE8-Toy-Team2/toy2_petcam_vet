import { ChartNav, ChartNavUl, ChartNavLi } from "./Styles.jsx";

function Nav({ setPetState }) {
  return (
    <ChartNav>
      <ChartNavUl>
        <ChartNavLi onClick={() => setPetState("")}>전체보기</ChartNavLi>
        <ChartNavLi onClick={() => setPetState(false)}>퇴원</ChartNavLi>
        <ChartNavLi onClick={() => setPetState(true)}>입원</ChartNavLi>
      </ChartNavUl>
    </ChartNav>
  );
}

export default Nav;
