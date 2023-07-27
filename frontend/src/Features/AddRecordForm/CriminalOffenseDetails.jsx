import { Box, FormControl, TextField, Typography, Button } from "@mui/material";
import React, { useContext } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AddRecordFormContext } from "./formContextApi";

const criminalOffenseDetails = () => {
  const { RecordFormData, setRecordFormData } =
    useContext(AddRecordFormContext);

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setRecordFormData((prevState) => ({
      ...prevState, // Shallow copy of the previous state
      criminalOffenseDetails: {
        ...prevState.criminalOffenseDetails, // Shallow copy of the previous criminalOffenseDetails
        [name]: value, // Update the specific property of criminalOffenseDetails
      },
    }));
  };

  const handleDateChange = (date) => {
    setRecordFormData((prevState) => ({
      ...prevState,
      criminalOffenseDetails: {
        ...prevState.criminalOffenseDetails,
        arrestDateTimedate: date,
      },
    }));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Typography sx={{ textAlign: "center", m: "40px", fontSize: "1.5rem" }}>
        Criminal Offense Details
      </Typography>

      <Box>
        <Box sx={{ mr: "20px" }} display="flex" justifyContent="center">
          <FormControl fullWidth sx={{ m: "10px" }}>
            <TextField
              id="standard-basic"
              variant="standard"
              label="Offense Type"
              name="offenseType"
              value={RecordFormData.criminalOffenseDetails.offenseType}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: "10px 10px 0 10px" }}>
            <DatePicker
              label="Offense Date"
              name="date"
              value={RecordFormData.criminalOffenseDetails.date}
              onChange={handleDateChange}
              slotProps={TextField}
            />
          </FormControl>
        </Box>
        <Box sx={{ ml: "20px" }}></Box>
      </Box>
      <FormControl fullWidth sx={{ m: "10px" }}>
        <TextField
          id="standard-basic"
          variant="standard"
          label="Location"
          name="location"
          value={RecordFormData.criminalOffenseDetails.location}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: "10px" }}>
        <TextField
          id="standard-basic"
          variant="standard"
          type="text"
          label="Victim Details"
          name="victimDetails"
          value={RecordFormData.criminalOffenseDetails.victimDetails}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: "10px" }}>
        <TextField
          id="standard-basic"
          variant="standard"
          label="Additional Details"
          name="additionalDetails"
          value={RecordFormData.criminalOffenseDetails.additionalDetails}
          onChange={handleInputChange}
        />
      </FormControl>
    </LocalizationProvider>
  );
};

export default criminalOffenseDetails;
