import React from "react";
import Pagination from "style/Users/Pagination/Pagination";
import ActivePageNumber from "style/Users/Pagination/ActivePageNumber";
import PageNumber from "style/Users/Pagination/PageNumber";

function Paginator({ userCount, pageSize, currentPage, onPageChange }) {
  const pagesCount = Math.ceil(userCount / pageSize);

  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const currentPages =
    currentPage > 2
      ? pages.slice(currentPage - 3, currentPage + 2)
      : pages.slice(0, 5);

  return (
    <Pagination>
      {currentPages.map((page) => {
        if (page === currentPage) {
          return <ActivePageNumber>{page}</ActivePageNumber>;
        }
        return (
          <PageNumber onClick={() => onPageChange(page)}>{page}</PageNumber>
        );
      })}
    </Pagination>
  );
}

export default Paginator;
