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
import UserForm from "./userForm";
import { useNavigate } from "react-router-dom";

const RegisterUser = () => {
  const emptyState = {
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
  const [formState, setFormState] = useState(emptyState);
  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const { refetch: refetchOnRegister } = useGetUsersQuery();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formState", formState);
    if (formState) {
      registerUser(formState)
        .then(() => {
          refetchOnRegister(), setFormState(emptyState), navigate("/user");
          console.log("Request sent");
        })
        .catch((err) => console.log("Something went wrong", err));
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box width="80vw" sx={{}}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", margin: "30px", fontWeight: "bold" }}
        >
          Create User Account
        </Typography>
        <form onSubmit={handleSubmit}>
          <UserForm formState={formState} setFormState={setFormState} />
          <Button
            type="submit"
            variant="text"
            size="large"
            sx={{
              justifySelf: "end",
              margin: "10px",
            }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default RegisterUser;
