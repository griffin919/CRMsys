import { Box, FormControl, TextField, Typography, Button } from "@mui/material";
import React, { useContext } from "react";

const warrantsAndAlerts = ({ formData, setForm }) => {
  const { warrantsAndAlerts } = formData;

  let index = 0;

  const handleInputChange = (index, key, value) => {
    setForm((prevData) => ({
      ...prevData,
      warrantsAndAlerts: prevData.warrantsAndAlerts.map((record, i) =>
        i === index ? { ...record, [key]: value } : record
      ),
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
            value={warrantsAndAlerts[index].warrantType}
            onChange={(e) =>
              handleInputChange(index, "warrantType", e.target.value)
            }
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: "10px" }}>
          <TextField
            id="standard-basic"
            variant="standard"
            type="text"
            label="Warrant Details"
            name="warrantDetails"
            value={warrantsAndAlerts[index].warrantDetails}
            onChange={(e) =>
              handleInputChange(index, "warrantDetails", e.target.value)
            }
          />
        </FormControl>
      </Box>
      <Box sx={{ ml: "20px" }}></Box>
    </Box>
  );
};

export default warrantsAndAlerts;
