import { Box, FormControl, TextField, Typography, Button } from "@mui/material";
import React, { useContext } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AddRecordFormContext } from "./formContextApi";

const ChargesComponent = () => {
  const { inputChange, dateInputChange, FormData } =
    useContext(AddRecordFormContext);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Typography sx={{ textAlign: "center", m: "40px", fontSize: "1.5rem" }}>
        Charge & Conviction History
      </Typography>

      <Box display="flex" justifyContent="center">
        <Box sx={{ mr: "20px" }}>
          <FormControl fullWidth sx={{ m: "10px 10px 0 10px" }}>
            <DatePicker
              label="Date of charge/conviction"
              name="ChargeDate"
              value={FormData.chargeAndConvictionHistory.ChargeDate}
              onChange={dateInputChange}
              slotProps={{ TextField: { variant: "outlined" } }}
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: "10px" }}>
            <TextField
              id="standard-basic"
              variant="standard"
              label="Charge/Conviction"
              name="charge"
              value={FormData.chargeAndConvictionHistory.charge}
              onChange={inputChange}
            />
          </FormControl>
        </Box>
        <Box sx={{ ml: "20px" }}>
          <FormControl fullWidth sx={{ m: "10px" }}>
            <TextField
              id="standard-basic"
              variant="standard"
              label="Nature of offense"
              name="offenseNature"
              value={FormData.chargeAndConvictionHistory.offenseNature}
              onChange={inputChange}
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: "10px" }}>
            <TextField
              id="standard-basic"
              variant="standard"
              type="number"
              label="Court Case Number"
              name="courtCaseNumber"
              value={FormData.chargeAndConvictionHistory.courtCaseNumber}
              onChange={inputChange}
            />
          </FormControl>
        </Box>
      </Box>
      <FormControl fullWidth sx={{ m: "10px" }}>
        <TextField
          id="standard-basic"
          variant="standard"
          label="Convicted?"
          name="convicted"
          value={FormData.chargeAndConvictionHistory.convicted}
          onChange={inputChange}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: "10px" }}>
        <TextField
          id="standard-basic"
          variant="standard"
          name="sentencingDetails"
          label="Sentencing Details"
          value={FormData.chargeAndConvictionHistory.sentencingDetails}
          onChange={inputChange}
        />
      </FormControl>
    </LocalizationProvider>
  );
};

export default ChargesComponent;
