import React from "react";
import { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  ArrowDropDownCircleOutlined,
  AccountCircleRounded,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { LogoutRounded } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import {
  Divider,
  List,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Link,
  CssBaseline,
  Drawer,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../Features/app/darkModeSlice";
import FlexBetween from "./FlexBetween";
import { logout } from "../Features/user/authSlice";
import { useLogoutMutation } from "../Features/user/userApiSlice";
import { useNavigate } from "react-router-dom";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { styled, useTheme } from "@mui/material/styles";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, useTheme }) => ({
    flexGrow: 1,
    marginLeft: `-${drawerWidth}px`,
  })
);

const MuiAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  ...(open && {
    width: `calc(100%-${drawerWidth}px)`,
    marginLeft: `${drawerWidth}`,
  }),
}));

//--------------------------------------------------
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
//--------------------------------------------------

const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutUser] = useLogoutMutation();

  const currentMode = useSelector((state) => state.global.mode);
  const { userInfo } = useSelector((state) => state.auth);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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

  const navLinkObj = [
    { label: "Home", icon: HomeIcon, navLink: "/dashboard" },
    { label: "Admin", icon: AdminPanelSettingsIcon, navLink: "/user" },
    { label: "Account", icon: AccountCircleRounded, navLink: "" },
    // { label: "Logout", icon: LogoutRounded, navLink: "" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <MuiAppBar
        open={open}
        sx={{
          position: "static",
          background: "none",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <FlexBetween>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>

            {/* LEFT SIDE */}
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

          {/* RIGHT SIDE */}
          <FlexBetween>
            <IconButton size="medium" onClick={() => navigate("/user")}>
              <AdminPanelSettingsIcon />
            </IconButton>
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
            <IconButton onClick={() => navigate("/user")}>
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
      </MuiAppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ display: "flex", justifyContent: "space-between" }}>
          <div>
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
          </div>
          <div>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
        </DrawerHeader>
        <Divider />
        <List>
          {navLinkObj.map((value, index) => (
            <ListItem
              key={index}
              disablePadding
              onClick={() => navigate(value.navLink)}
            >
              <ListItemButton>
                <ListItemIcon>
                  <value.icon />
                </ListItemIcon>
                <ListItemText primary={value.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
};

export default NavBar;
