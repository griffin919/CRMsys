import {
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import { useRegisterUserMutation } from "./userApiSlice";
import { useGetUsersQuery } from "./userApiSlice";
import CircularProgress from "@mui/material/CircularProgress";

const UserForm = ({ formState, setFormState }) => {
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <TextField
              label="First Name"
              variant="standard"
              name="fname"
              value={formState.fname}
              onChange={handleOnchange}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label="Last Name"
              variant="standard"
              name="lname"
              value={formState.lname}
              onChange={handleOnchange}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label="Username"
              variant="standard"
              name="username"
              value={formState.username}
              onChange={handleOnchange}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label="Gender"
              variant="standard"
              name="gender"
              value={formState.gender}
              onChange={handleOnchange}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label="Phone Number"
              variant="standard"
              name="contact"
              value={formState.contact}
              onChange={handleOnchange}
            />
          </FormControl>
        </Grid>
        <Grid item md={6} style={{ display: "flex", flexDirection: "column" }}>
          <FormControl fullWidth>
            <TextField
              label="Email"
              variant="standard"
              type="email"
              name="email"
              value={formState.email}
              onChange={handleOnchange}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label="Password"
              variant="standard"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleOnchange}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label="Role"
              variant="standard"
              name="role"
              type="text"
              value={formState.role}
              onChange={handleOnchange}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label="Department"
              variant="standard"
              name="department"
              type="text"
              value={formState.department}
              onChange={handleOnchange}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label="Jurisdiction"
              variant="standard"
              name="jurisdiction"
              type="text"
              value={formState.jurisdiction}
              onChange={handleOnchange}
            />
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserForm;
