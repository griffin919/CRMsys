import { Box, FormControl, TextField, Typography, Button } from "@mui/material";
import React, { useContext } from "react";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AddRecordFormContext } from "./formContextApi";

const ArrestsComponent = () => {
  const { inputChange, dateInputChange, FormData } =
    useContext(AddRecordFormContext);

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
              value={FormData.arrestRecords.arrestDateTime}
              onChange={dateInputChange}
              slotProps={{ TextField: { variant: "outlined" } }}
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: "10px" }}>
            <TextField
              id="standard-basic"
              variant="standard"
              label="Arresting Agency"
              name="arrestingAgency"
              value={FormData.arrestRecords.arrestingAgency}
              onChange={inputChange}
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
              value={FormData.arrestRecords.arrestingOfficer}
              onChange={inputChange}
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: "10px" }}>
            <TextField
              id="standard-basic"
              variant="standard"
              label="Officer ID"
              name="arrestingOfficerID"
              value={FormData.arrestRecords.arrestingOfficerID}
              onChange={inputChange}
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
          value={FormData.arrestRecords.arrestLocation}
          onChange={inputChange}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: "10px" }}>
        <TextField
          id="standard-basic"
          variant="standard"
          name="charges"
          label="Charges"
          value={FormData.arrestRecords.charges}
          onChange={inputChange}
        />
      </FormControl>
    </LocalizationProvider>
  );
};

export default ArrestsComponent;
