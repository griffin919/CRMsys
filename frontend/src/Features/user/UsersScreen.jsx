import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetUsersQuery } from "./userApiSlice";
import { Search } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Grid,
  Typography,
  InputBase,
  IconButton,
  Link,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import CircularProgress from "@mui/material/CircularProgress";
import {
  saveAllUsers,
  saveSearchUserResults,
  saveClickedUserID,
} from "./authSlice";
import { useTheme } from "@emotion/react";
import UserAccount from "./UserAccount";

const UsersScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();

  // Destructure the data from the query hook
  const { data, isSuccess, isLoading, error, refetch } = useGetUsersQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );

  // useEffect(() => {
  //   dispatch(saveClickedUserID(null));
  // });

  // const users = useSelector((state) => state.auth.users);
  const { users, userInfo, userSearchResults, userID } = useSelector(
    (state) => state.auth
  );
  // console.log(
  //   " users, userInfo, userSearchResults: ",
  //   users,
  //   userInfo,
  //   userSearchResults
  // );

  if (isLoading) {
    return (
      <div>
        <Typography>
          {"Loading users..." && <CircularProgress size="medium" />}
        </Typography>
      </div>
    );
  } else if (isSuccess) {
    // Dispatch the saveAllusers action only if users are not yet saved in Redux
    dispatch(saveAllUsers(data));
  } else if (error && users == null) {
    return (
      <div>
        <Typography>Error loading users!</Typography>
      </div>
    );
    console.log(error);
  }

  const handleCellDoubleClick = (params) => {
    dispatch(saveClickedUserID(params.row.id));

    navigate("/user/update");
  };

  const handleSearch = (e) => {
    let searchVal = e.target.value;

    if (searchVal) {
      const filteredUsers = Object.values(users).filter(
        (user) =>
          user.fname.toLowerCase() == searchVal.toLowerCase() ||
          user.lname.toLowerCase() == searchVal.toLowerCase()
      );

      console.log("filteredUsers: ", filteredUsers);
      if (filteredUsers && filteredUsers.length > 0) {
        dispatch(saveSearchUserResults(filteredUsers));
      } else {
        dispatch(saveSearchUserResults(null));
      }
    }
  };

  let renderedUserObj =
    userSearchResults && Object.values(userSearchResults).length > 0
      ? userSearchResults
      : users;

  const columns = [
    { field: "name", headerName: "Name", minWidth: 200 },
    { field: "username", headerName: "Username", minWidth: 100 },
    { field: "role", headerName: "Role", minWidth: 150 },
    { field: "department", department: "Department", minWidth: 150 },
    { field: "contact", headerName: "Contact", minWidth: 200 },
    { field: "jurisdiction", headerName: "Jurisdiction", minWidth: 100 },
  ];

  const rows = Object.values(renderedUserObj).map((user) => ({
    id: user._id,
    name: `${user.fname} ${user.lname}`,
    username: user.username,
    role: user.role,
    department: user.department,
    contact: user.contact,
    jurisdiction: user.jurisdiction,
  }));

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Grid container>
        <Grid item>
          <div>
            <Grid
              item
              md={12}
              sx={{ display: "flex", justifyContent: "end", margin: "30px" }}
            >
              <div
                style={{
                  backgroundColor: `${theme.palette.background.paper}`,
                  padding: "0px 20px",
                  marginRight: "30px",
                  borderRadius: "30px",
                  display: "inline",
                }}
              >
                <InputBase
                  placeholder="Search record..."
                  onChange={handleSearch}
                />
                <IconButton>
                  <Search />
                </IconButton>
              </div>
              <div style={{ display: "inline" }}>
                <Link
                  href=""
                  onClick={() => navigate("/user/register")}
                  underline="none"
                  sx={{ color: `${theme.palette.background.alt}` }}
                  gap="20px"
                >
                  Create account
                </Link>
                <IconButton onClick={() => navigate("/user/register")}>
                  <AddIcon />
                </IconButton>
              </div>
            </Grid>
            <DataGrid
              rows={rows}
              columns={columns}
              sx={{ border: "none", cursor: "pointer" }}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                },
              }}
              getRowId={(row) => row.id}
              pageSizeOptions={[10, 20]}
              onCellDoubleClick={handleCellDoubleClick}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default UsersScreen;
