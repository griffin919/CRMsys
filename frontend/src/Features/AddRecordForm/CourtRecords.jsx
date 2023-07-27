import { Box, FormControl, TextField, Typography, Button } from "@mui/material";
import React, { useContext } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AddRecordFormContext } from "./formContextApi";

const CourtRecords = () => {
  const { RecordFormData, setRecordFormData } =
    useContext(AddRecordFormContext);

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setRecordFormData((prevState) => ({
      ...prevState, // Shallow copy of the previous state
      courtRecords: {
        ...prevState.courtRecords, // Shallow copy of the previous courtRecords
        [name]: value, // Update the specific property of courtRecords
      },
    }));
  };

  const handleDateChange = (date) => {
    setRecordFormData((prevState) => ({
      ...prevState,
      courtRecords: {
        ...prevState.courtRecords,
        arrestDateTimedate: date,
      },
    }));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Typography sx={{ textAlign: "center", m: "40px", fontSize: "1.5rem" }}>
        Court Record
      </Typography>

      <Box>
        <Box sx={{ mr: "20px" }} display="flex" justifyContent="center">
          <FormControl fullWidth sx={{ m: "10px 10px 0 10px" }}>
            <DatePicker
              label="Court Appearance Date"
              name="courtAppearance"
              value={RecordFormData.courtRecords.courtAppearance}
              onChange={handleDateChange}
              slotProps={TextField}
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: "10px 10px 0 10px" }}>
            <DatePicker
              label="Hearing Date"
              name="hearingDate"
              value={RecordFormData.courtRecords.hearingDate}
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
          label="Court Order"
          name="courtOrder"
          value={RecordFormData.courtRecords.courtOrder}
          onChange={handleInputChange}
        />
      </FormControl>

      <FormControl fullWidth sx={{ m: "10px" }}>
        <TextField
          id="standard-basic"
          variant="standard"
          label="Case Summary"
          name="caseSummary"
          value={RecordFormData.courtRecords.caseSummary}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: "10px" }}>
        <TextField
          id="standard-basic"
          variant="standard"
          label="Legal Documents"
          name="legalDocuments"
          value={RecordFormData.courtRecords.legalDocuments}
          onChange={handleInputChange}
        />
      </FormControl>
    </LocalizationProvider>
  );
};

export default CourtRecords;
