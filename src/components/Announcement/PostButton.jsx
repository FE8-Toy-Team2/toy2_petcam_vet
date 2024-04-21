import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Pencil from "../../assets/pencil.svg?react";

const PostButtonStyle = styled.button`
  width: 100%;
  padding: 3px;
  border: none;
  border-radius: 5px;
  background-color: #504239;
  cursor: pointer;
  & > svg {
    width: 28px;
    height: 28px;
    & > path {
      stroke: var(--color-salgu);
    }
  }  
`;

const PostButton = () => {
  const navigate = useNavigate();

  const navigateToCreate = () => {
    navigate("/announcement/write");
  }
  return (
    <PostButtonStyle 
      type="button"
      onClick={navigateToCreate}
    >
      <Pencil />
    </PostButtonStyle>
  );
};

export default PostButton;
