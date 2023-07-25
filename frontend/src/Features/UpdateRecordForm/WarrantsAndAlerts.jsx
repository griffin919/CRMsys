import { Box, FormControl, TextField, Typography, Button } from "@mui/material";
import React, { useContext } from "react";
import { AddRecordFormContext } from "./formContextApi";

const warrantsAndAlerts = () => {
  const { inputChange, FormData } = useContext(AddRecordFormContext);

  return (
    <Box>
      <Typography sx={{ textAlign: "center", m: "40px", fontSize: "1.5rem" }}>
        Criminal Offense Details
      </Typography>
      <Box sx={{ mr: "20px" }} display="flex" justifyContent="center">
        <FormControl fullWidth sx={{ m: "10px" }}>
          <TextField
            id="standard-basic"
            variant="standard"
            label="warrantType"
            name="Warrant Type"
            value={FormData.warrantsAndAlerts.warrantType}
            onChange={inputChange}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: "10px" }}>
          <TextField
            id="standard-basic"
            variant="standard"
            type="text"
            label="Warrant Details"
            name="warrantDetails"
            value={FormData.warrantsAndAlerts.warrantDetails}
            onChange={inputChange}
          />
        </FormControl>
      </Box>
      <Box sx={{ ml: "20px" }}></Box>
    </Box>
  );
};

export default warrantsAndAlerts;
