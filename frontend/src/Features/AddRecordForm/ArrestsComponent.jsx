import { Box, FormControl, TextField, Typography, Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AddRecordFormContext } from "./formContextApi";

const ArrestsComponent = ({ formData, setForm }) => {
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setForm((prevState) => ({
      ...prevState, // Shallow copy of the previous state
      arrestRecords: {
        ...prevState.arrestRecords, // Shallow copy of the previous arrestRecords
        [name]: value, // Update the specific property of arrestRecords
      },
    }));
  };

  const handleDateChange = (date) => {
    setForm((prevState) => ({
      ...prevState,
      arrestRecords: {
        ...prevState.arrestRecords,
        arrestDateTimedate: date,
      },
    }));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Typography sx={{ textAlign: "center", m: "40px", fontSize: "1.5rem" }}>
        Arrest Details
      </Typography>

      <Box display="flex" justifyContent="center">
        <Box sx={{ mr: "20px" }}>
          <FormControl fullWidth sx={{ m: "10px 10px 0 10px" }}>
            <DateTimePicker
              label="Date and Time of Arrest"
              name="arrestDateTime"
              value={formData.arrestRecords.arrestDateTimedate}
              onChange={handleDateChange}
              slotProps={{ TextField: { variant: "outlined" } }}
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: "10px" }}>
            <TextField
              id="standard-basic"
              variant="standard"
              label="Arresting Agency"
              name="arrestingAgency"
              value={formData.arrestRecords.arrestingAgency}
              onChange={handleInputChange}
            />
          </FormControl>
        </Box>
        <Box sx={{ ml: "20px" }}>
          <FormControl fullWidth sx={{ m: "10px" }}>
            <TextField
              id="standard-basic"
              variant="standard"
              label="Arresting Officer"
              name="arrestingOfficer"
              value={formData.arrestRecords.arrestingOfficer}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: "10px" }}>
            <TextField
              id="standard-basic"
              variant="standard"
              label="Officer ID"
              name="arrestingOfficerID"
              value={formData.arrestRecords.arrestingOfficerID}
              onChange={handleInputChange}
            />
          </FormControl>
        </Box>
      </Box>
      <FormControl fullWidth sx={{ m: "10px" }}>
        <TextField
          id="standard-basic"
          variant="standard"
          label="Location of Arrest"
          name="arrestLocation"
          value={formData.arrestRecords.arrestLocation}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: "10px" }}>
        <TextField
          id="standard-basic"
          variant="standard"
          name="charges"
          label="Charges"
          value={formData.arrestRecords.charges}
          onChange={handleInputChange}
        />
      </FormControl>
    </LocalizationProvider>
  );
};

export default ArrestsComponent;
