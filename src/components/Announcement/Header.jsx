import { useParams } from "react-router-dom";
import styled from "styled-components";
import Search from "../common/Search";
import PostButton from "./PostButton";

const HeaderWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 48px 0;
  & > h2 {
    font-size: 4rem;
  }
`;

const HeaderControl = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Header = () => {
  const { id } = useParams();

  return (
    <HeaderWrapper>
      <h2>공지사항</h2>
      <HeaderControl>
        {id
          ? ""
          : <>
              <Search />
              <PostButton />
            </>
        }
      </HeaderControl>
    </HeaderWrapper>
  );
};

export default Header;
