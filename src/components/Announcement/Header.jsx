import styled from "styled-components";
import PropTypes from "prop-types";
import Search from "../common/Search";
import PostButton from "./PostButton";

const HeaderWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
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
  return (
    <HeaderWrapper>
      <h2>{title}</h2>
      <HeaderControl>
        {!setFilter ? "" :
          <>
            <Search setFilter={setFilter} />
            <PostButton />
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
