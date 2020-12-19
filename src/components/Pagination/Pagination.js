import React from "react";
import "./Pagination.css";

const Pagination = (props) => {
  const { getPreviousPage, getNextPage, page } = props;
  return (
    <>
      {/* {page === 1 ? (
        <button disabled onClick={getPreviousPage}>
          Previous
        </button>
      ) : (
        <button onClick={getPreviousPage}>Previous</button>
      )} */}

      <div className="btn_box">
        <button disabled={page === 1 ? true : false} onClick={getPreviousPage}>
          Previous
        </button>

        <p> {page}</p>

        <button onClick={getNextPage}>Next</button>
      </div>
    </>
  );
};

export default Pagination;
