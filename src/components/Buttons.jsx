import { styled } from "styled-components";

{
  /* <SmallButton btnColor="버튼색을 넣으세요" textColor="버튼 텍스트 칼라를 넣으세요">등록</SmallButton>*/
}
{
  /* <NormalButton btnColor="버튼색을 넣으세요" textColor="버튼 텍스트 칼라를 넣으세요">등록</NormalButton>  */
}

// 작은버튼
export const SmallButton = styled.button`
  width: 50px;
  height: 30px;
  border: none;
  background-color: ${(props) => props.btnColor};
  color: ${(props) => props.textColor};
  cursor: pointer;
`;

// 보통버튼
export const NormalButton = styled.button`
  width: 130px;
  height: 40px;
  border: none;
  background-color: ${(props) => props.btnColor};
  color: ${(props) => props.textColor};
  cursor: pointer;
`;
