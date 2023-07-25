import { Box, FormControl, TextField, Typography, Button } from "@mui/material";
import React, { useContext } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AddRecordFormContext } from "./formContextApi";

const CourtRecords = () => {
  const { inputChange, dateInputChange, FormData } =
    useContext(AddRecordFormContext);

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
              value={FormData.courtRecords.courtAppearance}
              onChange={dateInputChange}
              slotProps={TextField}
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: "10px 10px 0 10px" }}>
            <DatePicker
              label="Hearing Date"
              name="hearingDate"
              value={FormData.courtRecords.hearingDate}
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
          label="Court Order"
          name="courtOrder"
          value={FormData.courtRecords.courtOrder}
          onChange={inputChange}
        />
      </FormControl>

      <FormControl fullWidth sx={{ m: "10px" }}>
        <TextField
          id="standard-basic"
          variant="standard"
          label="Case Summary"
          name="caseSummary"
          value={FormData.courtRecords.caseSummary}
          onChange={inputChange}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: "10px" }}>
        <TextField
          id="standard-basic"
          variant="standard"
          label="Legal Documents"
          name="legalDocuments"
          value={FormData.courtRecords.legalDocuments}
          onChange={inputChange}
        />
      </FormControl>
    </LocalizationProvider>
  );
};

export default CourtRecords;
