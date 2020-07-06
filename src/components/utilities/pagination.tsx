/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Markdown } from "../interfaces/markdown";
import { GetHTMLFromMarkdown } from "../../utils/data-utils";
import { Link } from "gatsby";

export interface PaginationProps {
  currentPage: number;
  numPages: number;
}
const Pagination: React.FC<PaginationProps> = ({ currentPage, numPages }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1 ? "/news/" : `/news/${(currentPage - 1).toString()}/`;
  const nextPage = `/news/${(currentPage + 1).toString()}/`;

  return (
    <div className="w-full md:w-2/4 mx-auto">
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          listStyle: "none",
          padding: 0,
        }}
      >
        {!isFirst && (
          <Link to={prevPage} rel="prev">
            ← Previous Page
          </Link>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <li
            key={`pagination-number${i + 1}`}
            style={{
              margin: 0,
            }}
          >
            <Link
            className="hidden md:block"
              to={`/news/${i === 0 ? "" : i + 1}`}
              sx={{
                padding: 4,
                textDecoration: "none",
                color: i + 1 === currentPage ? "secondary" : "primary",
               
              }}
            >
              {i + 1}
            </Link>
          </li>
        ))}
        {!isLast && (
          <Link to={nextPage} rel="next">
            Next Page →
          </Link>
        )}
      </ul>
    </div>
  );
};
export default Pagination;
