import {
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import { useUpdateUserMutation } from "./userApiSlice";
import { useGetUsersQuery, useDeleteUserMutation } from "./userApiSlice";

import CircularProgress from "@mui/material/CircularProgress";
import UserForm from "./userForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UpdateUser = () => {
  const { users, userID } = useSelector((state) => state.auth);

  const clickedUser = Object.values(users).filter(
    (user) => user._id === userID
  );

  const [formState, setFormState] = useState({ ...clickedUser[0] });

  const [updateUser, { isLoading: isLoadingUpdate }] = useUpdateUserMutation();
  const [deleteUser, { isLoading: isLoadingDelete }] = useDeleteUserMutation();

  const navigate = useNavigate();

  const { refetch: refetchOnRegister } = useGetUsersQuery();

  const handleDelete = () => {
    deleteUser(userID)
      .then(() => {
        navigate("/user");
      })
      .catch((err) => console.log("Something went wrong", err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState) {
      updateUser({ userID, formState })
        .then(() => {
          refetchOnRegister(), console.log("Create user request sent");
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
          {`${clickedUser[0].fname}'s Account`}
        </Typography>
        <form onSubmit={handleSubmit}>
          <UserForm formState={formState} setFormState={setFormState} />
          <Button
            type="submit"
            variant="text"
            size="large"
            sx={{
              margin: "10px",
            }}
          >
            Update
          </Button>
          <Button
            type="button"
            onClick={handleDelete}
            variant="text"
            size="large"
            sx={{
              margin: "10px",
            }}
          >
            Delete
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default UpdateUser;
