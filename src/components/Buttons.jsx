import { styled } from "styled-components";

{
  /* <SmallButton btnColor="버튼색을 넣으세요" textColor="버튼 텍스트 칼라를 넣으세요">등록</SmallButton>*/
}
{
  /* <NormalButton btnColor="버튼색을 넣으세요" textColor="버튼 텍스트 칼라를 넣으세요">등록</NormalButton>  */
}

// 직은버튼
export const SmallButton = styled.button`
  width: 50px;
  height: 30px;
  border: none;
  background-color: ${(props) => props.btnColor};
  color: ${(props) => props.textColor};
  cursor: pointer;

  /* 아래는 추가 내용. */
  font-size: 15px;
  font-family: "Pretendard";
  font-weight: 700;
  transition: 0.3s;
  border-radius: 5px;
  
  &:hover{
    background-color: #504239;
    color: #E3E2DE;
  }
`;

// 보통버튼
export const NormalButton = styled.button`
  width: 130px;
  height: 40px;
  border: none;
  background-color: ${(props) => props.btnColor};
  color: ${(props) => props.textColor};
  cursor: pointer;

/* 아래는 추가 내용. */
  font-size: 18px;
  font-family: "Pretendard";
  font-weight: 700;
  transition: 0.3s;
  border-radius: 7px;
  
  &:hover{
    background-color: #504239;
    color: #E3E2DE;
  }
`;


