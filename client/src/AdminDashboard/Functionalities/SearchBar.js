import React from "react";
import { TextField } from "@mui/material";

const SearchBar = ({ searchKeyword, handleSearch }) => {
  return (
    <TextField
      label="Search"
      type="text"
      value={searchKeyword}
      onChange={handleSearch}
      placeholder="Search..."
      variant="outlined"
      size="small"
    />
  );
};

export default SearchBar;
