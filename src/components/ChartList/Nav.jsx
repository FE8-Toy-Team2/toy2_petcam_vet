import { useEffect, useState } from "react";
import { ChartNav, ChartNavUl, ChartNavLi } from "./Styles.jsx";

function Nav({ setPetState }) {
  const [searchValue, setSearchValue] = useState("");

  const onChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <ChartNav>
      <ChartNavUl>
        <ChartNavLi onClick={() => setPetState("")}>전체보기</ChartNavLi>
        <ChartNavLi onClick={() => setPetState("당일")}>당일</ChartNavLi>
        <ChartNavLi onClick={() => setPetState("퇴원")}>퇴원</ChartNavLi>
        <ChartNavLi onClick={() => setPetState("입원")}>입원</ChartNavLi>
      </ChartNavUl>
      <input
        type="text"
        value={searchValue}
        placeholder="검색"
        onChange={onChangeSearch}
      />
    </ChartNav>
  );
}

export default Nav;
