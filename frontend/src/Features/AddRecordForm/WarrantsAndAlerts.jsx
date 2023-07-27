import { Box, FormControl, TextField, Typography, Button } from "@mui/material";
import React, { useContext } from "react";
import { AddRecordFormContext } from "./formContextApi";

const warrantsAndAlerts = () => {
  const { RecordFormData, setRecordFormData } =
    useContext(AddRecordFormContext);

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setRecordFormData((prevState) => ({
      ...prevState, // Shallow copy of the previous state
      warrantsAndAlerts: {
        ...prevState.warrantsAndAlerts, // Shallow copy of the previous warrantsAndAlerts
        [name]: value, // Update the specific property of warrantsAndAlerts
      },
    }));
  };

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
            name="warrantType"
            label="Warrant Type"
            value={RecordFormData.warrantsAndAlerts.warrantType}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: "10px" }}>
          <TextField
            id="standard-basic"
            variant="standard"
            type="text"
            label="Warrant Details"
            name="warrantDetails"
            value={RecordFormData.warrantsAndAlerts.warrantDetails}
            onChange={handleInputChange}
          />
        </FormControl>
      </Box>
      <Box sx={{ ml: "20px" }}></Box>
    </Box>
  );
};

export default warrantsAndAlerts;
