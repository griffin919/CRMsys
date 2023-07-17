import { useState, useContext } from "react";
import {
  Box,
  FormControl,
  Button,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AddRecordFormContext } from "./formContextApi";

const PersonalInfoComponent = () => {
  const { inputChange, dateInputChange, FormData } =
    useContext(AddRecordFormContext);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box display="flex" mt="50px" justifyContent="center">
        <Box display="flex" justifyContent="center">
          <Box padding="20px">
            <FormControl fullWidth sx={{ mt: "20px" }}>
              <TextField
                id="standard-basic"
                name="fname"
                label="First Name"
                variant="standard"
                value={FormData.personalInformation.fname}
                onChange={inputChange}
                required
              />
            </FormControl>
            <FormControl fullWidth sx={{ mt: "20px" }}>
              <TextField
                id="standard-basic"
                name="lname"
                label="Last Name"
                variant="standard"
                value={FormData.personalInformation.lname}
                onChange={inputChange}
                required
              />
            </FormControl>

            <FormControl fullWidth sx={{ mt: "20px" }}>
              <DatePicker
                label="Date of Birth"
                name="dateOfBirth"
                value={FormData.personalInformation.dateOfBirth}
                onChange={dateInputChange}
                slotProps={{ TextField: { variant: "outlined" } }}
              />
            </FormControl>
            <FormControl fullWidth sx={{ mt: "20px" }}>
              <Select
                name="IDtype"
                label="ID Type"
                value={FormData.personalInformation.IDtype}
                onChange={inputChange}
              >
                <MenuItem value="Ghana Card">Ghana Card</MenuItem>
                <MenuItem value="Drivers License">Drivers License</MenuItem>
                <MenuItem value="Passport">Passport</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ mt: "20px" }}>
              <TextField
                id="demo-simple-select-standard"
                name="IDnumber"
                label="ID Number"
                variant="standard"
                value={FormData.personalInformation.IDnumber}
                onChange={inputChange}
                required
              />
            </FormControl>
          </Box>

          <Box padding="20px">
            <FormControl sx={{ mt: "35px" }}>
              <RadioGroup
                aria-label="gender"
                name="gender"
                value={FormData.personalInformation.gender}
                onChange={inputChange}
                row
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </FormControl>
            <FormControl fullWidth sx={{ mt: "20px" }}>
              <TextField
                id="standard-basic"
                name="physicalDescription"
                label="Physical Description"
                variant="standard"
                value={FormData.personalInformation.physicalDescription}
                onChange={inputChange}
                required
              />
            </FormControl>
            <FormControl fullWidth sx={{ mt: "20px" }}>
              <TextField
                id="standard-basic"
                label="Contact Info 1"
                name="contactInformation1"
                type="number"
                variant="standard"
                value={FormData.personalInformation.contactInformation1}
                onChange={inputChange}
                required
              />
            </FormControl>
            <FormControl fullWidth sx={{ mt: "20px" }}>
              <TextField
                id="standard-basic"
                name="contactInformation2"
                label="Contact Info 2"
                type="number"
                variant="standard"
                value={FormData.personalInformation.contactInformation2}
                onChange={inputChange}
              />
            </FormControl>

            <FormControl fullWidth sx={{ mt: "20px" }}>
              <TextField
                id="standard-basic"
                label="Aliases"
                name="aliases"
                variant="standard"
                type="text"
                value={FormData.personalInformation.aliases}
                onChange={inputChange}
              />
            </FormControl>
          </Box>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default PersonalInfoComponent;
