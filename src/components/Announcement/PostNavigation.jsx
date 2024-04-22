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

const PostNavigationItem = styled.li`
  display: flex;
  gap: 8px;
`;

const PostNavigationButtonWrapper = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

const PostNavigation = ({ id }) => {
  const [announcements] = useContext(AnnouncementListContext);

  return (
    <PostNavigtionWrapper>
      <PostNavigationList>
        {id > 1
          ? <PostNavigationItem>
              <span>다음 글</span>
              <PostNavigationButtonWrapper>
                <NavigateButton route={`/announcement/${id-1}`} text={announcements[id-2].title} />
              </PostNavigationButtonWrapper>
            </PostNavigationItem>
          : ""}
        {id < announcements.length
          ? <PostNavigationItem>
              <span>이전 글</span>
              <PostNavigationButtonWrapper>
                <NavigateButton route={`/announcement/${id+1}`} text={announcements[id].title} />
              </PostNavigationButtonWrapper>
            </PostNavigationItem>
          : ""}
      </PostNavigationList>
    </PostNavigtionWrapper>
  )
};

PostNavigation.propTypes = {
  id: PropTypes.number.isRequired
};

export default PostNavigation;
