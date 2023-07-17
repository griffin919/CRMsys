import { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Search,
  ArrowDropDownCircleOutlined,
  AccountCircleRounded,
  LogoutOutlined,
  LogoutSharp,
} from "@mui/icons-material";
import {
  useTheme,
  AppBar,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../Features/app/darkModeSlice";
import FlexBetween from "./FlexBetween";
import { logout } from "../Features/user/authSlice";
import { useLogoutMutation } from "../Features/user/userApiSlice";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const navigate = useNavigate();
  const [logoutUser] = useLogoutMutation();

  const currentMode = useSelector((state) => state.global.mode);
  const { userInfo } = useSelector((state) => state.auth);

  const changeMode = () => {
    if (currentMode === "dark") {
      dispatch(setMode());
    } else {
      dispatch(setMode());
    }
  };

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
        <FlexBetween>
          <Box onClick={() => navigate("/")}>
            <Typography variant="h6">ONRECORD</Typography>
          </Box>
        </FlexBetween>
        {/* MIDDLE */}
        <></>
        {/* RIGHT SIDE */}
        <FlexBetween>
          <IconButton onClick={changeMode}>
            {currentMode === "light" ? (
              <DarkModeOutlined />
            ) : (
              <LightModeOutlined />
            )}
          </IconButton>
          <IconButton>
            <AccountCircleRounded />
          </IconButton>
          <Box display="flex">
            <Typography>Hi, {userInfo.user.fname}</Typography>
            {userInfo.user.role === "admin" ? (
              <Typography m="0 1em">{userInfo.user.role}</Typography>
            ) : (
              ""
            )}
          </Box>
          <IconButton onClick={handleLogout}>
            <LogoutSharp />
            <Typography>Logout</Typography>
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
