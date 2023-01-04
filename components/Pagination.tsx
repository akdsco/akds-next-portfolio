import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

interface IPagination {
  itemsPerPage: number;
  totalItems: number;
  paginate: (e: React.SyntheticEvent, pageNumber: number) => void;
  currentPage: number;
  className: string;
}

function Pagination({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
  className,
}: IPagination) {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={className ? "mi-pagination " + className : "mi-pagination"}>
      <ul>
        {currentPage === 1 ? null : (
          <li>
            <button onClick={(e) => paginate(e, currentPage - 1)}>
              <ChevronLeftIcon />
            </button>
          </li>
        )}
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={currentPage === number ? "is-active" : ""}
          >
            <button onClick={(e) => paginate(e, number)}>{number}</button>
          </li>
        ))}
        {currentPage === pageNumbers[pageNumbers.length - 1] && (
          <li>
            <button onClick={(e) => paginate(e, currentPage + 1)}>
              <ChevronRightIcon />
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

export { Pagination };
