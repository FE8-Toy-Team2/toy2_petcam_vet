import styled from "styled-components";
import PropTypes from "prop-types";

const PaginationButtonWrapper = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
  &.active {
    font-weight: 700;
    text-decoration: underline;
  }
`;

const PaginationButton = ({ toPage, currentPage, index }) => {
  return (
    <PaginationButtonWrapper
      type="button"
      onClick={toPage} 
      className={currentPage === index ? "active" : ""}
    >
      {index}
    </PaginationButtonWrapper>
  )
};

PaginationButton.propTypes = {
  toPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired
};

export default PaginationButton;
