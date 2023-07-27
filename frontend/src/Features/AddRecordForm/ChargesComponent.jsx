import { Box, FormControl, TextField, Typography, Button } from "@mui/material";
import React, { useContext } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AddRecordFormContext } from "./formContextApi";

const ChargesComponent = () => {
  const { RecordFormData, setRecordFormData } =
    useContext(AddRecordFormContext);

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setRecordFormData((prevState) => ({
      ...prevState, // Shallow copy of the previous state
      chargeAndConvictionHistory: {
        ...prevState.chargeAndConvictionHistory, // Shallow copy of the previous chargeAndConvictionHistory
        [name]: value, // Update the specific property of chargeAndConvictionHistory
      },
    }));
  };

  const handleDateChange = (date) => {
    setRecordFormData((prevState) => ({
      ...prevState,
      chargeAndConvictionHistory: {
        ...prevState.chargeAndConvictionHistory,
        arrestDateTimedate: date,
      },
    }));
  };

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
              value={RecordFormData.chargeAndConvictionHistory.ChargeDate}
              onChange={handleDateChange}
              slotProps={{ TextField: { variant: "outlined" } }}
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: "10px" }}>
            <TextField
              id="standard-basic"
              variant="standard"
              label="Charge/Conviction"
              name="charge"
              value={RecordFormData.chargeAndConvictionHistory.charge}
              onChange={handleInputChange}
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
              value={RecordFormData.chargeAndConvictionHistory.offenseNature}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: "10px" }}>
            <TextField
              id="standard-basic"
              variant="standard"
              type="number"
              label="Court Case Number"
              name="courtCaseNumber"
              value={RecordFormData.chargeAndConvictionHistory.courtCaseNumber}
              onChange={handleInputChange}
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
          value={RecordFormData.chargeAndConvictionHistory.convicted}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: "10px" }}>
        <TextField
          id="standard-basic"
          variant="standard"
          name="sentencingDetails"
          label="Sentencing Details"
          value={RecordFormData.chargeAndConvictionHistory.sentencingDetails}
          onChange={handleInputChange}
        />
      </FormControl>
    </LocalizationProvider>
  );
};

export default ChargesComponent;
