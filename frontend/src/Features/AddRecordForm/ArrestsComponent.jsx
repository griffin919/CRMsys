import { Box, FormControl, TextField, Typography, Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const ArrestsComponent = ({ formData, setForm }) => {
  const { arrestRecords } = formData;

  console.log("arrestRecords", arrestRecords);

  let index = 0;

  const handleInputChange = (index, key, value) => {
    setForm((prevData) => ({
      ...prevData,
      arrestRecords: prevData.arrestRecords.map((record, i) =>
        i === index ? { ...record, [key]: value } : record
      ),
    }));
  };

  const handleDateChange = (index, date) => {
    setForm((prevData) => ({
      ...prevData,
      arrestRecords: prevData.arrestRecords.map((record, i) =>
        i === index ? { ...record, arrestDateTime: date } : record
      ),
    }));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Typography sx={{ textAlign: "center", m: "40px", fontSize: "1.5rem" }}>
        Arrest Details
      </Typography>

      <Box display="flex" justifyContent="center">
        <Box sx={{ mr: "20px" }}>
          <FormControl fullWidth sx={{ m: "10px 10px 0 10px" }}>
            <DateTimePicker
              label="Date and Time of Arrest"
              name="arrestDateTime"
              value={dayjs(arrestRecords[index].arrestDateTime)}
              onChange={(date) => handleDateChange(index, date)}
              slotProps={{ TextField: { variant: "outlined" } }}
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: "10px" }}>
            <TextField
              id="standard-basic"
              variant="standard"
              label="Arresting Agency"
              name="arrestingAgency"
              value={arrestRecords[index].arrestingAgency}
              onChange={(e) =>
                handleInputChange(index, "arrestingAgency", e.target.value)
              }
            />
          </FormControl>
        </Box>
        <Box sx={{ ml: "20px" }}>
          <FormControl fullWidth sx={{ m: "10px" }}>
            <TextField
              id="standard-basic"
              variant="standard"
              label="Arresting Officer"
              name="arrestingOfficer"
              value={arrestRecords[index].arrestingOfficer}
              onChange={(e) =>
                handleInputChange(index, "arrestingOfficer", e.target.value)
              }
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: "10px" }}>
            <TextField
              id="standard-basic"
              variant="standard"
              label="Officer ID"
              name="arrestingOfficerID"
              value={arrestRecords[index].arrestingOfficerID}
              onChange={(e) =>
                handleInputChange(index, "arrestingOfficerID", e.target.value)
              }
            />
          </FormControl>
        </Box>
      </Box>
      <FormControl fullWidth sx={{ m: "10px" }}>
        <TextField
          id="standard-basic"
          variant="standard"
          label="Location of Arrest"
          name="arrestLocation"
          value={arrestRecords[index].arrestLocation}
          onChange={(e) =>
            handleInputChange(index, "arrestLocation", e.target.value)
          }
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: "10px" }}>
        <TextField
          id="standard-basic"
          variant="standard"
          name="charges"
          label="Charges"
          value={arrestRecords[index].charges}
          onChange={(e) => handleInputChange(index, "charges", e.target.value)}
        />
      </FormControl>
    </LocalizationProvider>
  );
};

export default ArrestsComponent;
