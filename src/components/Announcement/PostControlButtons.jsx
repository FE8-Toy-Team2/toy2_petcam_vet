import { NormalButton } from "../Buttons";
import styled from "styled-components";

const PostControlButtonsWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;
  & button {
    font-family: inherit;
  }
`;

const PostControlButtons = () => {
  return (
    <PostControlButtonsWrapper>
      <li>
        <NormalButton btnColor="var(--color-prime)">
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

export default PostControlButtons;
