import React, { useState } from "react";
import Pagination from "style/Users/Pagination/Pagination";
import ActivePageNumber from "style/Users/Pagination/ActivePageNumber";
import PageNumber from "style/Users/Pagination/PageNumber";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function Paginator({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
  portionSize = 10,
}) {
  const [portionNumber, setPortionNumber] = useState(
    Math.ceil(currentPage / portionSize)
  );

  const pagesCount = Math.ceil(itemsCount / pageSize);

  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const portionLeftBorder = (portionNumber - 1) * portionSize + 1;
  const portionRightBorder = portionNumber * portionSize;

  return (
    <Pagination>
      {portionNumber > 1 && (
        <BsArrowLeftCircleFill
          style={{ color: "cornflowerblue" }}
          onClick={() => setPortionNumber(portionNumber - 1)}
        />
      )}
      {pages
        .filter(
          (page) => page >= portionLeftBorder && page <= portionRightBorder
        )
        .map((page) => {
          if (page === currentPage) {
            return <ActivePageNumber key={page}>{page}</ActivePageNumber>;
          }
          return (
            <PageNumber key={page} onClick={() => onPageChange(page)}>{page}</PageNumber>
          );
        })}
      {portionNumber < portionCount && (
        <BsArrowRightCircleFill
          style={{ color: "cornflowerblue" }}
          onClick={() => setPortionNumber(portionNumber + 1)}
        />
      )}
    </Pagination>
  );
}

export default Paginator;
