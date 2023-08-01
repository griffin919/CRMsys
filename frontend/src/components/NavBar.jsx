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
  Toolbar,
  Typography,
  Box,
  Button,
  Link,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../Features/app/darkModeSlice";
import FlexBetween from "./FlexBetween";
import { logout } from "../Features/user/authSlice";
import { useLogoutMutation } from "../Features/user/userApiSlice";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

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
      navigate("/");
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
          <Box onClick={() => navigate("/dashboard")}>
            <Link
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: `${theme.palette.background.alt}`,
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              OnRECORD
            </Link>
          </Box>
        </FlexBetween>
        {/* MIDDLE */}
        <></>
        {/* RIGHT SIDE */}
        <FlexBetween>
          <IconButton size="medium" onClick={() => navigate("/dashboard")}>
            <HomeIcon />
          </IconButton>
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
          <Link
            onClick={handleLogout}
            sx={{ cursor: "pointer", textDecoration: "none" }}
          >
            Logout
          </Link>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
