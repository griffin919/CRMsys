import { useState, useContext } from "react";
import {
  Box,
  FormControl,
  Button,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Select,
  MenuItem,
  Input,
  Grid,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const PersonalInfoComponent = ({ formData, setForm, setUploadedPic }) => {
  const { personalInformation } = formData;

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setForm((prevState) => ({
      ...prevState, // Shallow copy of the previous state
      personalInformation: {
        ...prevState.personalInformation, // Shallow copy of the previous personalInformation
        [name]: value, // Update the specific property of personalInformation
      },
    }));
  };

  const handleDateChange = (date) => {
    setForm((prevState) => ({
      ...prevState,
      personalInformation: {
        ...prevState.personalInformation,
        dateOfBirth: dayjs(date),
      },
    }));
  };

  const handlePhotoInput = (e) => {
    const file = e.target.files[0];
    setUploadedPic(file);
  };

  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Typography sx={{ textAlign: "center", m: "40px", fontSize: "1.5rem" }}>
          Personal Information
        </Typography>

        <Grid container spacing={10}>
          <Grid item md={6}>
            <FormControl fullWidth sx={{ mt: "20px" }}>
              <TextField
                id="standard-basic"
                name="fname"
                label="First Name"
                variant="standard"
                value={personalInformation.fname}
                onChange={handleInputChange}
                required
              />
            </FormControl>
            <FormControl fullWidth sx={{ mt: "20px" }}>
              <TextField
                id="standard-basic"
                name="lname"
                label="Last Name"
                variant="standard"
                value={personalInformation.lname}
                onChange={handleInputChange}
                required
              />
            </FormControl>

            <FormControl fullWidth sx={{ mt: "20px" }}>
              <DatePicker
                label="Date of Birth"
                name="dateOfBirth"
                value={dayjs(personalInformation.dateOfBirth)}
                onChange={handleDateChange}
                slotProps={{ TextField: { variant: "outlined" } }}
              />
            </FormControl>
            <FormControl fullWidth sx={{ mt: "20px" }}>
              <Select
                name="IDtype"
                label="ID Type"
                value={personalInformation.IDtype}
                onChange={handleInputChange}
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
                value={personalInformation.IDnumber}
                onChange={handleInputChange}
                required
              />
            </FormControl>
          </Grid>
          <Grid item md={6}>
            <FormControl sx={{ mt: "35px" }}>
              <RadioGroup
                aria-label="gender"
                name="gender"
                value={personalInformation.gender}
                onChange={handleInputChange}
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
                value={personalInformation.physicalDescription}
                onChange={handleInputChange}
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
                value={personalInformation.contactInformation1}
                onChange={handleInputChange}
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
                value={personalInformation.contactInformation2}
                onChange={handleInputChange}
              />
            </FormControl>

            <FormControl fullWidth sx={{ mt: "20px" }}>
              <TextField
                id="standard-basic"
                label="Aliases"
                name="aliases"
                variant="standard"
                type="text"
                value={personalInformation.aliases}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl fullWidth sx={{ mt: "20px" }}>
              <Input
                type="file"
                accept=".png, .jpg, .jpeg"
                name="photo"
                onChange={handlePhotoInput}
              />
            </FormControl>
          </Grid>
        </Grid>
      </LocalizationProvider>
    </Box>
  );
};

export default PersonalInfoComponent;
