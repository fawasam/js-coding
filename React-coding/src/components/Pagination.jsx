import React from "react";

const Pagination = ({ products, total, page, setPage }) => {
  const handlePagination = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= total / 10) {
      setPage(selectedPage);
    }
  };
  return (
    <>
      {products.length ? (
        <div className="pagination">
          <span
            style={{ color: "dodgerblue" }}
            onClick={() => handlePagination(page - 1)}
            className={page <= 1 ? "pagination-disabled" : ""}
          >
            ◀
          </span>
          {[...Array(total / 10)].map((_, i) => (
            <span
              key={i}
              onClick={() => handlePagination(i + 1)}
              className={page == i + 1 ? "pagination-selected" : ""}
            >
              {i + 1}
            </span>
          ))}
          {/* <span>123</span> */}
          <span
            style={{ color: "dodgerblue" }}
            onClick={() => handlePagination(page + 1)}
            className={page >= total / 10 ? "pagination-disabled" : ""}
          >
            ▶
          </span>
        </div>
      ) : null}
    </>
  );
};

export default Pagination;
