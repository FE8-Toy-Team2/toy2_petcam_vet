import { useState } from "react";
import styled from "styled-components";
// TODO: Search 컴포넌트 로직 구현

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 272px;
  height: 24px;
`;

const SearchButton = styled.button`
  position: absolute;
  top: 6px;
  right: 4px;
  padding: 0;
  border: none;
  background-color: inherit;
  cursor: pointer;
  & > img {
    width: 18px;
    height: 18px;
  }
`;

const Search = () => {
  const [query, setQuery] = useState("");

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleClick = () => {
    console.log(query);
  };

  return (
    <SearchWrapper>
      <SearchInput 
        type="text" 
        value={query} 
        placeholder="검색"
        onChange={handleChange}
      />
      <SearchButton type="button" onClick={handleClick} >
        <img src="/search.svg" alt="Search" />
      </SearchButton>
    </SearchWrapper>
  );
};

export default Search;
