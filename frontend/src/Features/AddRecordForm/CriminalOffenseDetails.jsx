import { Box, FormControl, TextField, Typography, Button } from "@mui/material";
import React, { useContext } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const CriminalOffenseDetails = ({ formData, setForm }) => {
  const { criminalOffenseDetails } = formData;

  console.log("criminalOffenseDetails", criminalOffenseDetails);

  let index = 0;

  const handleInputChange = (index, key, value) => {
    setForm((prevData) => ({
      ...prevData,
      criminalOffenseDetails: prevData.criminalOffenseDetails.map((record, i) =>
        i === index ? { ...record, [key]: value } : record
      ),
    }));
  };

  const handleDateChange = (index, date) => {
    setForm((prevData) => ({
      ...prevData,
      criminalOffenseDetails: prevData.criminalOffenseDetails.map((record, i) =>
        i === index ? { ...record, date: date } : record
      ),
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
              value={criminalOffenseDetails.offenseType}
              onChange={(e) =>
                handleInputChange(index, "offenseType", e.target.value)
              }
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: "10px 10px 0 10px" }}>
            <DatePicker
              label="Offense Date"
              name="date"
              value={dayjs(criminalOffenseDetails[index].date)}
              onChange={(date) => handleDateChange(index, date)}
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
          value={criminalOffenseDetails[index].location}
          onChange={(e) => handleInputChange(index, "location", e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: "10px" }}>
        <TextField
          id="standard-basic"
          variant="standard"
          type="text"
          label="Victim Details"
          name="victimDetails"
          value={criminalOffenseDetails[index].victimDetails}
          onChange={(e) =>
            handleInputChange(index, "victimDetails", e.target.value)
          }
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: "10px" }}>
        <TextField
          id="standard-basic"
          variant="standard"
          label="Additional Details"
          name="additionalDetails"
          value={criminalOffenseDetails[index].additionalDetails}
          onChange={(e) =>
            handleInputChange(index, "additionalDetails", e.target.value)
          }
        />
      </FormControl>
    </LocalizationProvider>
  );
};

export default CriminalOffenseDetails;
