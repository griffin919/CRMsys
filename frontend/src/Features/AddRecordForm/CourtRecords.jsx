import { Box, FormControl, TextField, Typography, Button } from "@mui/material";
import React, { useContext } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const CourtRecords = ({ formData, setForm }) => {
  const { courtRecords } = formData;

  console.log("courtRecords", courtRecords);

  let index = 0;

  const handleInputChange = (index, key, value) => {
    setForm((prevData) => ({
      ...prevData,
      courtRecords: prevData.courtRecords.map((record, i) =>
        i === index ? { ...record, [key]: value } : record
      ),
    }));
  };

  const handleHearingDateChange = (index, date) => {
    setForm((prevData) => ({
      ...prevData,
      courtRecords: prevData.courtRecords.map((record, i) =>
        i === index ? { ...record, hearingDate: date } : record
      ),
    }));
  };
  const handleCourtAppearanceChange = (index, date) => {
    setForm((prevData) => ({
      ...prevData,
      courtRecords: prevData.courtRecords.map((record, i) =>
        i === index ? { ...record, courtAppearance: date } : record
      ),
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
              value={dayjs(courtRecords[index].courtAppearance)}
              onChange={(date) => handleCourtAppearanceChange(index, date)}
              slotProps={TextField}
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: "10px 10px 0 10px" }}>
            <DatePicker
              label="Hearing Date"
              name="hearingDate"
              value={dayjs(courtRecords[index].hearingDate)}
              onChange={(date) => handleHearingDateChange(index, date)}
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
          value={courtRecords[index].courtOrder}
          onChange={(e) =>
            handleInputChange(index, "courtOrder", e.target.value)
          }
        />
      </FormControl>

      <FormControl fullWidth sx={{ m: "10px" }}>
        <TextField
          id="standard-basic"
          variant="standard"
          label="Case Summary"
          name="caseSummary"
          value={courtRecords[index].caseSummary}
          onChange={(e) =>
            handleInputChange(index, "caseSummary", e.target.value)
          }
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: "10px" }}>
        <TextField
          id="standard-basic"
          variant="standard"
          label="Legal Documents"
          name="legalDocuments"
          value={courtRecords[index].legalDocuments}
          onChange={(e) =>
            handleInputChange(index, "legalDocuments", e.target.value)
          }
        />
      </FormControl>
    </LocalizationProvider>
  );
};

export default CourtRecords;
