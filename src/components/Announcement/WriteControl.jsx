import { NormalButton } from "../Buttons";
import styled from "styled-components";

const WriteControlWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 0;
  & > button {
    font-family: inherit;
  }
`;

const WriteControl = () => {
  return (
    <WriteControlWrapper>
      <NormalButton btnColor="var(--color-brown)">
        이미지 첨부
      </NormalButton>
      <NormalButton btnColor="var(--color-prime)">
        제출하기
      </NormalButton>
    </WriteControlWrapper>
  );
};

export default WriteControl;
