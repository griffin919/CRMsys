import { useState } from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { useSelector } from "react-redux";

const RecordLayout = () => {
  return (
    <Box width="100%" height="100%">
      <Box>
        <NavBar />
        <Box display="flex" justifyContent="center">
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default RecordLayout;
