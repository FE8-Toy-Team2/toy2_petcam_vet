import { useNavigate } from "react-router-dom";
import { NormalButton } from "../Buttons";
import styled from "styled-components";
import PropTypes from "prop-types";

const PostControlButtonsWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;
  & button {
    font-family: inherit;
  }
`;

const PostControlButtons = ({ id }) => {
  const navigate = useNavigate();

  return (
    <PostControlButtonsWrapper>
      <li>
        <NormalButton btnColor="var(--color-prime)" onClick={() => { navigate(`/announcement/${id}/edit`); }}>
          수정하기
        </NormalButton>
      </li>
      <li>
        <NormalButton btnColor="var(--color-prime)">
          삭제하기
        </NormalButton>
      </li>
    </PostControlButtonsWrapper>
  );
};

PostControlButtons.propTypes = {
  id: PropTypes.number.isRequired
};

export default PostControlButtons;
