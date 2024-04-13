import { ChartNav, ChartNavUl, ChartNavLi } from "./Styles.jsx";

function Nav({ petState, setPetState }) {
  return (
    <ChartNav>
      <ChartNavUl>
        <ChartNavLi onClick={() => setPetState("")}>전체보기</ChartNavLi>
        <ChartNavLi onClick={() => setPetState("당일")}>당일</ChartNavLi>
        <ChartNavLi onClick={() => setPetState("퇴원")}>퇴원</ChartNavLi>
        <ChartNavLi onClick={() => setPetState("입원")}>입원</ChartNavLi>
      </ChartNavUl>
    </ChartNav>
  );
}

export default Nav;
