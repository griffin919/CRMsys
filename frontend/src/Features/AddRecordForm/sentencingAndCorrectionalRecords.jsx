import { Box, FormControl, TextField, Typography, Button } from "@mui/material";
import React, { useContext } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const SentencingAndCorrectionalRecords = ({ formData, setForm }) => {
  const { sentencingAndCorrectionalRecords } = formData;

  console.log(
    "sentencingAndCorrectionalRecords",
    sentencingAndCorrectionalRecords
  );

  let index = 0;

  const handleInputChange = (index, key, value) => {
    setForm((prevData) => ({
      ...prevData,
      sentencingAndCorrectionalRecords:
        prevData.sentencingAndCorrectionalRecords.map((record, i) =>
          i === index ? { ...record, [key]: value } : record
        ),
    }));
  };

  const handleReleaseDateChange = (index, date) => {
    setForm((prevData) => ({
      ...prevData,
      sentencingAndCorrectionalRecords:
        prevData.sentencingAndCorrectionalRecords.map((record, i) =>
          i === index ? { ...record, releaseDate: date } : record
        ),
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
              value={dayjs(sentencingAndCorrectionalRecords[index].releaseDate)}
              onChange={(date) => handleReleaseDateChange(index, date)}
              slotProps={TextField}
            />
          </FormControl>

          <FormControl fullWidth sx={{ m: "10px" }}>
            <TextField
              id="standard-basic"
              variant="standard"
              label="Sentence Type"
              name="sentenceType"
              value={sentencingAndCorrectionalRecords[index].sentenceType}
              onChange={(e) =>
                handleInputChange(index, "sentenceType", e.target.value)
              }
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
              value={sentencingAndCorrectionalRecords[index].duration}
              onChange={(e) =>
                handleInputChange(index, "duration", e.target.value)
              }
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
                sentencingAndCorrectionalRecords[index]
                  .paroleOrProbationConditions
              }
              onChange={(e) =>
                handleInputChange(
                  index,
                  "paroleOrProbationConditions",
                  e.target.value
                )
              }
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
          value={sentencingAndCorrectionalRecords[index].CorrectionFacility}
          onChange={(e) =>
            handleInputChange(index, "CorrectionFacility", e.target.value)
          }
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: "10px" }}>
        <TextField
          id="standard-basic"
          variant="standard"
          name="sentenceModifications"
          label="Sentence Modification"
          value={sentencingAndCorrectionalRecords[index].sentenceModifications}
          onChange={(e) =>
            handleInputChange(index, "sentenceModifications", e.target.value)
          }
        />
      </FormControl>
    </LocalizationProvider>
  );
};

export default SentencingAndCorrectionalRecords;
