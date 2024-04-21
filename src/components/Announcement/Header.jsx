import { useContext } from "react";
import { LogInContext } from "../../context/LogInContext";
import styled from "styled-components";
import PropTypes from "prop-types";
import Search from "../common/Search";
import PostButton from "./PostButton";

const HeaderWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 48px 0;
  & > h2 {
    font-size: 2rem;
    font-weight: 600;
  }
`;

const HeaderControl = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Header = ({ title, setFilter }) => {
  const isLoggedIn = useContext(LogInContext);

  return (
    <HeaderWrapper>
      <h2>{title}</h2>
      <HeaderControl>
        {!setFilter ? "" :
          <>
            <Search setFilter={setFilter} />
            {isLoggedIn
              ? <PostButton />
              : ""}
          </>
        }
      </HeaderControl>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  setFilter: PropTypes.func
};

export default Header;
