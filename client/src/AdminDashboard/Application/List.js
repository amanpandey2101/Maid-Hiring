import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Select } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

const ApplicationList = ({ currentItems, handleUpdateStatus }) => {
  const [openMessage, setOpenMessage] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleOpenMessageModal = () => setOpenMessage(true);
  const handleCloseMessageModal = () => setOpenMessage(false);

  const handleOpenStatusModal = () => setOpenStatus(true);
  const handleCloseStatusModal = () => setOpenStatus(false);
  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };


  return (
    <div className=" overflow-x-auto ">
      <table className="divide-y divide-gray-200  ">
        <thead className="bg-green-500 ">
          <tr>
            <th className="px-4 py-3 text-left text-xs md:font-medium text-white uppercase tracking-wider">
              #
            </th>
            <th className="px-4 py-3 text-left text-xs md:font-medium font-normal text-white uppercase tracking-wider">
              Maid Name
            </th>
            <th className="px-4 py-3 text-left text-xs  md:font-medium font-normal text-white uppercase tracking-wider">
              Email
            </th>
            <th className="px-4 py-3 text-left text-xs  md:font-medium font-normal text-white uppercase tracking-wider">
              Mobile
            </th>
            <th className="px-4 py-3 text-left text-xs  md:font-medium font-normal text-white uppercase tracking-wider">
              Address
            </th>
            <th className="px-4 py-3 text-left text-xs  md:font-medium font-normal text-white uppercase tracking-wider">
              City
            </th>
            <th className="px-4 py-3 text-left text-xs  md:font-medium font-normal text-white uppercase tracking-wider">
              State
            </th>
            <th className="px-4 py-3 text-left text-xs  md:font-medium font-normal text-white uppercase tracking-wider">
              Pincode
            </th>
            <th className="px-4 py-3 text-left text-xs  md:font-medium font-normal text-white uppercase tracking-wider">
              Gender
            </th>
            <th className="px-4 py-3 text-left text-xs  md:font-medium font-normal text-white uppercase tracking-wider">
              Message
            </th>
            <th className="px-4 py-3 text-left text-xs  md:font-medium font-normal text-white uppercase tracking-wider">
              Status
            </th>
            <th className="px-4 py-3 text-left text-xs  md:font-medium font-normal text-white uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 max-[768px]:text-xs">
          {currentItems.map((application, index) => {
            return (
              <tr key={index}>
                <td className="px-4 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-4 py-4 whitespace-nowrap">
                  {application.firstName} {application.lastName}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  {application.email}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  {application.phone}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  {application.address}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  {application.city}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  {application.state}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  {application.pincode}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  {application.gender}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleOpenMessageModal()}
                    className="text-white p-1.5 hover:scale-[1.02] rounded-md shadow-xl bg-violet-500 w-20"
                  >
                    See
                  </button>
                </td>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  open={openMessage}
                  onClose={handleCloseMessageModal}
                  closeAfterTransition
                  slots={{ backdrop: Backdrop }}
                  slotProps={{
                    backdrop: {
                      timeout: 500,
                    },
                  }}
                >
                  <Fade in={openMessage}>
                    <Box sx={style}>
                      <Typography
                        id="transition-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Message
                      </Typography>
                      <div className="border-b-2">
                        <Typography
                          id="transition-modal-description"
                          sx={{ mt: 2 }}
                        >
                          {application.message}
                        </Typography>
                      </div>
                      <div className="flex justify-center mt-2">
                        <Button
                          variant="contained"
                          color="error"
                          onClick={handleCloseMessageModal}
                        >
                          Close
                        </Button>
                      </div>
                    </Box>
                  </Fade>
                </Modal>
                <td className="px-4 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleOpenStatusModal()}
                    className={`font-medium border-[1.5px] p-1 rounded-md ${
                      application.status === "Pending"
                        ? "text-orange-600 border-orange-500"
                        : application.status === "Approved"
                        ? "text-green-600 border-green-600"
                        : "text-red-600 border-red-500"
                    }`}
                  >
                    {application.status}
                  </button>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleOpenStatusModal()}
                    className="text-white p-1.5 hover:scale-[1.02] rounded-md shadow-xl bg-green-600 hover:bg-green-700 w-20"
                  >
                    Update
                  </button>
                </td>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  open={openStatus}
                  onClose={handleCloseStatusModal}
                  closeAfterTransition
                  slots={{ backdrop: Backdrop }}
                  slotProps={{
                    backdrop: {
                      timeout: 500,
                    },
                  }}
                >
                  <Fade in={openStatus}>
                    <Box sx={style}>
                      <Typography
                        id="transition-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Update Application Status
                      </Typography>
                      <div className="mt-3 flex justify-center">
                        <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
                          <InputLabel id="demo-select-small-label">
                            Status
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={selectedStatus}
                            label="Status"
                            onChange={handleStatusChange}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem> 
                            <MenuItem value="Pending">Pending</MenuItem>
                            <MenuItem value="Approved">Approve</MenuItem>
                            <MenuItem value="Rejected">Reject</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      <div className=" flex justify-center mt-2 gap-4">
                        <Button
                          variant="contained"
                          color="success"
                          onClick={() => {
                            handleUpdateStatus(application._id, selectedStatus) 
                            setOpenStatus(false)
                          }} 
                        >
                          Update
                        </Button>
                     
                          <Button
                            variant="contained"
                            color="error"
                            onClick={handleCloseStatusModal}
                          >
                            Close
                          </Button>
                        
                      </div>
                    </Box>
                  </Fade>
                </Modal>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationList;
