import { Box, FormControl, TextField, Typography, Button } from "@mui/material";
import React, { useContext } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AddRecordFormContext } from "./formContextApi";

const criminalOffenseDetails = () => {
  const { inputChange, dateInputChange, FormData } =
    useContext(AddRecordFormContext);

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
              value={FormData.criminalOffenseDetails.offenseType}
              onChange={inputChange}
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: "10px 10px 0 10px" }}>
            <DatePicker
              label="Offense Date"
              name="date"
              value={FormData.criminalOffenseDetails.date}
              onChange={dateInputChange}
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
          value={FormData.criminalOffenseDetails.location}
          onChange={inputChange}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: "10px" }}>
        <TextField
          id="standard-basic"
          variant="standard"
          type="text"
          label="Victim Details"
          name="victimDetails"
          value={FormData.criminalOffenseDetails.victimDetails}
          onChange={inputChange}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: "10px" }}>
        <TextField
          id="standard-basic"
          variant="standard"
          label="Additional Details"
          name="additionalDetails"
          value={FormData.criminalOffenseDetails.additionalDetails}
          onChange={inputChange}
        />
      </FormControl>
    </LocalizationProvider>
  );
};

export default criminalOffenseDetails;
