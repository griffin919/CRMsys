import { Box, FormControl, TextField, Typography, Button } from "@mui/material";
import React, { useContext } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AddRecordFormContext } from "./formContextApi";

const sentencingAndCorrectionalRecords = () => {
  const { inputChange, dateInputChange, FormData } =
    useContext(AddRecordFormContext);

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
              value={FormData.sentencingAndCorrectionalRecords.releaseDate}
              onChange={dateInputChange}
              slotProps={TextField}
            />
          </FormControl>

          <FormControl fullWidth sx={{ m: "10px" }}>
            <TextField
              id="standard-basic"
              variant="standard"
              label="Sentence Type"
              name="sentenceType"
              value={FormData.sentencingAndCorrectionalRecords.sentenceType}
              onChange={inputChange}
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
              value={FormData.sentencingAndCorrectionalRecords.duration}
              onChange={inputChange}
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
                FormData.sentencingAndCorrectionalRecords
                  .paroleOrProbationConditions
              }
              onChange={inputChange}
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
          value={FormData.sentencingAndCorrectionalRecords.CorrectionFacility}
          onChange={inputChange}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: "10px" }}>
        <TextField
          id="standard-basic"
          variant="standard"
          name="sentenceModifications"
          label="Sentence Modification"
          value={
            FormData.sentencingAndCorrectionalRecords.sentenceModifications
          }
          onChange={inputChange}
        />
      </FormControl>
    </LocalizationProvider>
  );
};

export default sentencingAndCorrectionalRecords;
