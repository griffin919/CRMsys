import { Box, FormControl, TextField, Typography, Button } from "@mui/material";
import React, { useContext } from "react";
import { AddRecordFormContext } from "./formContextApi";

const victimInformation = () => {
  const { RecordFormData, setRecordFormData } =
    useContext(AddRecordFormContext);

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setRecordFormData((prevState) => ({
      ...prevState, // Shallow copy of the previous state
      victimInformation: {
        ...prevState.victimInformation, // Shallow copy of the previous victimInformation
        [name]: value, // Update the specific property of victimInformation
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
            label="Victim Name"
            name="name"
            value={RecordFormData.victimInformation.name}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: "10px" }}>
          <TextField
            id="standard-basic"
            variant="standard"
            type="text"
            label="Victim Details"
            name="victimDetails"
            value={RecordFormData.victimInformation.victimDetails}
            onChange={handleInputChange}
          />
        </FormControl>
      </Box>
      <Box sx={{ ml: "20px" }}></Box>
      <FormControl fullWidth sx={{ m: "10px" }}>
        <TextField
          id="standard-basic"
          variant="standard"
          label="Victim Support Services"
          name="victimSupportServices"
          value={RecordFormData.victimInformation.victimSupportServices}
          onChange={handleInputChange}
        />
      </FormControl>
    </Box>
  );
};

export default victimInformation;
