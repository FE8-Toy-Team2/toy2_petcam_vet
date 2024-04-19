import { useContext } from "react";
import { AnnouncementListContext } from "../../context/AnnouncementListContext";
import styled from "styled-components";
import PropTypes from "prop-types";
import NavigateButton from "./NavigateButton";

const PostNavigtionWrapper = styled.nav`
`;

const PostNavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  & span {
    font-weight: 700;
  }
`;

const PostNavigation = ({ id }) => {
  const [announcements] = useContext(AnnouncementListContext);

  return (
    <PostNavigtionWrapper>
      <PostNavigationList>
        {id > 1
          ? <li>
              <span>다음 글</span>
              <NavigateButton route={`/announcement/${id-1}`} text={announcements[id-2].title} />
            </li>
          : ""}
        {id < announcements.length
          ? <li>
              <span>이전 글</span>
              <NavigateButton route={`/announcement/${id+1}`} text={announcements[id].title} />
            </li>
          : ""}
      </PostNavigationList>
    </PostNavigtionWrapper>
  )
};

PostNavigation.propTypes = {
  id: PropTypes.number.isRequired
};

export default PostNavigation;
