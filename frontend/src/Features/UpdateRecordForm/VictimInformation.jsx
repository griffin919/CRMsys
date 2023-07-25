import { Box, FormControl, TextField, Typography, Button } from "@mui/material";
import React, { useContext } from "react";
import { AddRecordFormContext } from "./formContextApi";

const victimInformation = () => {
  const { inputChange, dateInputChange, FormData } =
    useContext(AddRecordFormContext);

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
            value={FormData.victimInformation.name}
            onChange={inputChange}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: "10px" }}>
          <TextField
            id="standard-basic"
            variant="standard"
            type="text"
            label="Victim Details"
            name="victimDetails"
            value={FormData.victimInformation.victimDetails}
            onChange={inputChange}
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
          value={FormData.victimInformation.victimSupportServices}
          onChange={inputChange}
        />
      </FormControl>
    </Box>
  );
};

export default victimInformation;
