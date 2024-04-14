import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// TODO: svg dynamic import 구현

const PostButtonStyle = styled.button`
  padding: 3px;
  border: none;
  border-radius: 5px;
  background-color: #504239;
  cursor: pointer;
  & > img {
    width: 28px;
    height: 28px;
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
      <img src="/pencil.svg" alt="Post" />
    </PostButtonStyle>
  );
};

export default PostButton;
