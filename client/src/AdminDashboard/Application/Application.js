import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import SearchBar from "../Functionalities/SearchBar";
import Table from "./List";
import TablePagination from "../Functionalities/Pagination";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { get, put } from "../../helpers/api_helper";

const ApplicationList = () => {
  const [application, setApplication] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get("/users");

        setApplication(response || []);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleUpdateStatus = async (userId, newStatus) => {
    try {
      const response = await put(`/user/${userId}/status`, { newStatus });
      const updatedApplication = response.user;
      setApplication((prevList) =>
       prevList.map((application) =>
       application._id === updatedApplication._id ? updatedApplication : application
        )
      );
      toast.success(response.message);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update status");
    }
  };
  const filteredApplication = application.filter((user) =>
    user.firstName.toLowerCase().includes(searchKeyword.toLowerCase()) 
    
  );
  let displayedApplication = filteredApplication;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = displayedApplication.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    setSearchKeyword(keyword);
    setCurrentPage(1);
  };

  return (
    <div className="m-4 pt-20 ">
      <div>
        <h1 className="text-2xl font-semibold mb-4 ">Applications</h1>
        <div className="mb-6">
          <SearchBar
            searchKeyword={searchKeyword}
            handleSearch={handleSearch}
          />
        </div>
        {loading ? (
          <div className="flex justify-center">
            <CircularProgress />
          </div>
        ) : (
          <>
            <Table
              application={application}
              filteredProducts={filteredApplication}
              currentItems={currentItems}
              handleUpdateStatus={handleUpdateStatus}
            />
          </>
        )}
      </div>
      <TablePagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={filteredApplication.length}
        onPageChange={handlePageChange}
      />
      <ToastContainer />
    </div>
  );
};

export default ApplicationList;
