import { Box, FormControl, TextField, Typography, Button } from "@mui/material";
import React, { useContext } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AddRecordFormContext } from "./formContextApi";

const sentencingAndCorrectionalRecords = () => {
  const { RecordFormData, setRecordFormData } =
    useContext(AddRecordFormContext);

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setRecordFormData((prevState) => ({
      ...prevState, // Shallow copy of the previous state
      sentencingAndCorrectionalRecords: {
        ...prevState.sentencingAndCorrectionalRecords, // Shallow copy of the previous sentencingAndCorrectionalRecords
        [name]: value, // Update the specific property of sentencingAndCorrectionalRecords
      },
    }));
  };

  const handleDateChange = (date) => {
    setRecordFormData((prevState) => ({
      ...prevState,
      sentencingAndCorrectionalRecords: {
        ...prevState.sentencingAndCorrectionalRecords,
        arrestDateTimedate: date,
      },
    }));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Typography sx={{ textAlign: "center", m: "40px", fontSize: "1.5rem" }}>
        Sentencing And Correctional Records
      </Typography>

      <Box display="flex" justifyContent="center">
        <Box sx={{ mr: "20px" }}>
          <FormControl fullWidth sx={{ m: "10px 10px 0 10px" }}>
            <DatePicker
              label="Release Date"
              name="releaseDate"
              value={
                RecordFormData.sentencingAndCorrectionalRecords.releaseDate
              }
              onChange={handleDateChange}
              slotProps={TextField}
            />
          </FormControl>

          <FormControl fullWidth sx={{ m: "10px" }}>
            <TextField
              id="standard-basic"
              variant="standard"
              label="Sentence Type"
              name="sentenceType"
              value={
                RecordFormData.sentencingAndCorrectionalRecords.sentenceType
              }
              onChange={handleInputChange}
            />
          </FormControl>
        </Box>
        <Box sx={{ ml: "20px" }}>
          <FormControl fullWidth sx={{ m: "10px" }}>
            <TextField
              id="standard-basic"
              variant="standard"
              label="Duration of Sentence"
              name="duration"
              value={RecordFormData.sentencingAndCorrectionalRecords.duration}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: "10px" }}>
            <TextField
              id="standard-basic"
              variant="standard"
              type="text"
              label="Porole/Probation Conditions"
              name="paroleOrProbationConditions"
              value={
                RecordFormData.sentencingAndCorrectionalRecords
                  .paroleOrProbationConditions
              }
              onChange={handleInputChange}
            />
          </FormControl>
        </Box>
      </Box>
      <FormControl fullWidth sx={{ m: "10px" }}>
        <TextField
          id="standard-basic"
          variant="standard"
          label="Correction Facility?"
          name="CorrectionFacility"
          value={
            RecordFormData.sentencingAndCorrectionalRecords.CorrectionFacility
          }
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: "10px" }}>
        <TextField
          id="standard-basic"
          variant="standard"
          name="sentenceModifications"
          label="Sentence Modification"
          value={
            RecordFormData.sentencingAndCorrectionalRecords
              .sentenceModifications
          }
          onChange={handleInputChange}
        />
      </FormControl>
    </LocalizationProvider>
  );
};

export default sentencingAndCorrectionalRecords;
