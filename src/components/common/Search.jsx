import { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types"

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 272px;
  height: 24px;
`;

const Search = ({ setFilter }) => {
  const [query, setQuery] = useState("");

  const handleChange = useCallback(event => {
    setQuery(event.target.value);
  }, []);

  useEffect(() => {
    setFilter(query);
  }, [query, setFilter]);

  return (
    <SearchWrapper>
      <SearchInput 
        type="text" 
        value={query} 
        placeholder="검색"
        onChange={handleChange}
      />
    </SearchWrapper>
  );
};

Search.propTypes = {
  setFilter: PropTypes.func
};

export default Search;
