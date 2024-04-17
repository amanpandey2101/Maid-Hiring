import React from "react";
import Pagination from "@mui/material/Pagination";

const TablePagination = ({
  currentPage,
  itemsPerPage,
  totalItems,
  onPageChange
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (event, page) => {
    onPageChange(page);
  };

  return (
    <div className="flex justify-center mt-5">
      <Pagination
        shape="rounded"
        size="large"
        color="primary"
        page={currentPage}
        count={totalPages}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default TablePagination;
