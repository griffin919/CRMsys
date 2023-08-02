import { Button, FormControl, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useRegisterUserMutation } from "./userApiSlice";
import CircularProgress from "@mui/material/CircularProgress";

const RegisterUser = () => {
  const initialUserState = {
    fname: "",
    lname: "",
    username: "",
    gender: "",
    email: "",
    contact: "",
    password: "",
    role: "",
    department: "",
    jurisdiction: "",
  };

  const [userData, setUserData] = useState(initialUserState);

  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const handleSubmit = () => {
    if (userData) {
      registerUser(userData)
        .then(() => console.log("Create user request sent"))
        .catch((err) => console.log("Something went wrong", err));
    }
  };

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <TextField
                label="First Name"
                variant="standard"
                name="fname"
                value={userData.fname}
                onChange={handleOnchange}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                label="Last Name"
                variant="standard"
                name="lname"
                value={userData.lname}
                onChange={handleOnchange}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                label="Username"
                variant="standard"
                name="username"
                value={userData.username}
                onChange={handleOnchange}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                label="Gender"
                variant="standard"
                name="gender"
                value={userData.gender}
                onChange={handleOnchange}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                label="Phone Number"
                variant="standard"
                name="contact"
                value={userData.contact}
                onChange={handleOnchange}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                label="Email"
                variant="standard"
                type="email"
                name="email"
                value={userData.email}
                onChange={handleOnchange}
              />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl fullWidth>
              <TextField
                label="First Name"
                variant="standard"
                name="password"
                type="password"
                value={userData.password}
                onChange={handleOnchange}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                label="Role"
                variant="standard"
                name="role"
                type="text"
                value={userData.role}
                onChange={handleOnchange}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                label="Department"
                variant="standard"
                name="department"
                type="text"
                value={userData.department}
                onChange={handleOnchange}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                label="Jurisdiction"
                variant="standard"
                name="jurisdiction"
                type="text"
                value={userData.jurisdiction}
                onChange={handleOnchange}
              />
            </FormControl>
            <Button type="submit" variant="contained" size="large">
              {"Submit" && <CircularProgress />}
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default RegisterUser;
