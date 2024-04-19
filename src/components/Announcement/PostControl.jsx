import styled from "styled-components";
import PropTypes from "prop-types";
import PostNavigation from "./PostNavigation";
import PostControlButtons from "./PostControlButtons";

const PostControlWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const PostControl = ({ id }) => {
  return (
    <PostControlWrapper>
      <PostNavigation id={id} />
      <PostControlButtons id={id} />
    </PostControlWrapper>
  )
}

PostControl.propTypes = {
  id: PropTypes.number.isRequired
};

export default PostControl;
