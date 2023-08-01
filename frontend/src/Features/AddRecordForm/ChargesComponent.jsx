import { Box, FormControl, TextField, Typography, Button } from "@mui/material";
import React, { useContext } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const ChargesComponent = ({ formData, setForm }) => {
  const { chargeAndConvictionHistory } = formData;

  console.log("chargeAndConvictionHistory", chargeAndConvictionHistory);

  let index = 0;

  const handleInputChange = (index, key, value) => {
    setForm((prevData) => ({
      ...prevData,
      chargeAndConvictionHistory: prevData.chargeAndConvictionHistory.map(
        (record, i) => (i === index ? { ...record, [key]: value } : record)
      ),
    }));
  };

  const handleDateChange = (index, date) => {
    setForm((prevData) => ({
      ...prevData,
      chargeAndConvictionHistory: prevData.chargeAndConvictionHistory.map(
        (record, i) => (i === index ? { ...record, ChargeDate: date } : record)
      ),
    }));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Typography sx={{ textAlign: "center", m: "40px", fontSize: "1.5rem" }}>
        Charge & Conviction History
      </Typography>

      <Box display="flex" justifyContent="center">
        <Box sx={{ mr: "20px" }}>
          <FormControl fullWidth sx={{ m: "10px 10px 0 10px" }}>
            <DatePicker
              label="Date of charge/conviction"
              name="date"
              value={dayjs(chargeAndConvictionHistory[index].ChargeDate)}
              onChange={(date) => handleDateChange(index, date)}
              slotProps={{ TextField: { variant: "outlined" } }}
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: "10px" }}>
            <TextField
              id="standard-basic"
              variant="standard"
              label="Charge/Conviction"
              name="charge"
              value={chargeAndConvictionHistory[index].charge}
              onChange={(e) =>
                handleInputChange(index, "charge", e.target.value)
              }
            />
          </FormControl>
        </Box>
        <Box sx={{ ml: "20px" }}>
          <FormControl fullWidth sx={{ m: "10px" }}>
            <TextField
              id="standard-basic"
              variant="standard"
              label="Nature of offense"
              name="offenseNature"
              value={chargeAndConvictionHistory[index].offenseNature}
              onChange={(e) =>
                handleInputChange(index, "offenseNature", e.target.value)
              }
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: "10px" }}>
            <TextField
              id="standard-basic"
              variant="standard"
              type="number"
              label="Court Case Number"
              name="courtCaseNumber"
              value={chargeAndConvictionHistory[index].courtCaseNumber}
              onChange={(e) =>
                handleInputChange(index, "courtCaseNumber", e.target.value)
              }
            />
          </FormControl>
        </Box>
      </Box>
      <FormControl fullWidth sx={{ m: "10px" }}>
        <TextField
          id="standard-basic"
          variant="standard"
          label="Convicted?"
          name="convicted"
          value={chargeAndConvictionHistory[index].convicted}
          onChange={(e) =>
            handleInputChange(index, "convicted", e.target.value)
          }
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: "10px" }}>
        <TextField
          id="standard-basic"
          variant="standard"
          name="sentencingDetails"
          label="Sentencing Details"
          value={chargeAndConvictionHistory[index].sentencingDetails}
          onChange={(e) =>
            handleInputChange(index, "sentencingDetails", e.target.value)
          }
        />
      </FormControl>
    </LocalizationProvider>
  );
};

export default ChargesComponent;
