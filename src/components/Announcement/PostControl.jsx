import { useContext } from "react";
import { LogInContext } from "../../context/LogInContext";
import styled from "styled-components";
import PropTypes from "prop-types";
import PostNavigation from "./PostNavigation";
import PostControlButtons from "./PostControlButtons";

const PostControlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

const PostControl = ({ id, dbId }) => {
  const isLoggedIn = useContext(LogInContext);
  return (
    <PostControlWrapper>
      <PostNavigation id={id} />
      {isLoggedIn
        ? <PostControlButtons id={id} dbId={dbId} />
        : ""}
    </PostControlWrapper>
  )
}

PostControl.propTypes = {
  id: PropTypes.number.isRequired,
  dbId: PropTypes.string.isRequired
};

export default PostControl;
