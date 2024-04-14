import styled from "styled-components";

const PostButtonStyle = styled.button`
  padding: 3px;
  border: none;
  border-radius: 5px;
  background-color: #504239;
  & > img {
    width: 28px;
    height: 28px;
  }  
`;

const PostButton = () => {
  return (
    <PostButtonStyle type="button">
      <img src="/pencil.svg" alt="Post" />
    </PostButtonStyle>
  );
};

export default PostButton;
