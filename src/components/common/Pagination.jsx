import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import ArrowPrev from "../../../public/arrow-prev.svg?react";
import ArrowNext from "../../../public/arrow-next.svg?react";

const PaginationNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const PaginationList = styled.ul`
  display: flex;
  gap: 8px;
`;

const PaginationButtons = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
  &.active {
    font-weight: 700;
    text-decoration: underline;
  }
`;

const PaginationArrowButtons = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E3E2DE;
  border: none;
  border-radius: 5px;
  padding: 3px;
  cursor: pointer;
  &:hover {
    background-color: #D9D9D9;
  }
  & > svg {
    width: 16px;
    height: 16px;
  }
`;

const Pagination = ({ currentPage, totalPosts, setPage, postBlock, pageBlock }) => {
  const [currentPageBlock, setCurrentPageBlock] = useState(Math.ceil(currentPage / postBlock));

  const [searchParams, setSearchParams] = useSearchParams();
  const toPage = (pageIndex) => {
    searchParams.set("page", pageIndex);
    setSearchParams(searchParams);
    setPage(pageIndex);
  };

  const totalPages = Math.ceil(totalPosts / postBlock);
  const totalPageBlock = Math.ceil(totalPages / pageBlock);
  const pageArray = Array.from({ length: pageBlock }, (_v, i) => (currentPageBlock - 1) * pageBlock + 1 + i);

  const toPageBlock = (pageBlockWeight) => {
    if (currentPageBlock + pageBlockWeight > totalPageBlock || currentPageBlock + pageBlockWeight < 1) {
      return;
    }

    const newPageIndex = (currentPageBlock - 1) * pageBlock + 1;
    toPage(newPageIndex);
    setCurrentPageBlock(prev => prev + pageBlockWeight);
  };

  return (
    <PaginationNav>
      <PaginationArrowButtons 
        type="button"
        onClick={() => { toPageBlock(-1); }} 
      >
        <ArrowPrev />
      </PaginationArrowButtons>
      <PaginationList>
        {pageArray.map(index =>
          {
            if (index > totalPages) {
              return;
            }
            return (
              <li key={index}>
                <PaginationButtons 
                  type="button" 
                  onClick={() => { toPage(index); }} 
                  className={index === currentPage ? "active" : ""}
                >
                  {index}
                </PaginationButtons>
              </li> 
            );
          }
        )}
      </PaginationList>
      <PaginationArrowButtons 
        type="button"
        onClick={() => { toPageBlock(1); }}
      >
        <ArrowNext />
      </PaginationArrowButtons>
    </PaginationNav>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPosts: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  postBlock: PropTypes.number.isRequired,
  pageBlock: PropTypes.number.isRequired
}

export default Pagination;
