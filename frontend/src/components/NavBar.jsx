import { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Search,
  ArrowDropDownCircleOutlined,
  AccountCircleRounded,
} from "@mui/icons-material";
import {
  useTheme,
  AppBar,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../Features/app/darkModeSlice";
import FlexBetween from "./FlexBetween";
import { light } from "@mui/material/styles/createPalette";
import { Link } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const currentMode = useSelector((state) => state.global.mode);
  const { userInfo } = useSelector((state) => state.auth);

  const changeMode = () => {
    if (currentMode === "dark") {
      dispatch(setMode());
    } else {
      dispatch(setMode());
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
          <Box>
            <Typography variant="h6" fontWeight="bold">
              ONRECORD
            </Typography>
          </Box>
        </FlexBetween>
        {/* MIDDLE */}
        <FlexBetween
          backgroundColor={theme.palette.background.alt}
          borderRadius="20px"
          p="0.1rem 1rem"
          gap="3rem"
        >
          <InputBase placeholder="Search..." />
          <IconButton>
            <Search />
          </IconButton>
        </FlexBetween>
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
          <Box>
            <Typography fontSize="0.6rem">Hi, {userInfo.user.fname}</Typography>
            {userInfo.user.role === "admin" ? (
              <Typography fontSize="0.5rem">{userInfo.user.role}</Typography>
            ) : (
              ""
            )}
          </Box>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
