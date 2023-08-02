import React from "react";
import NavBar from "../../components/NavBar";
import { Grid, Box } from "@mui/material";
import { Outlet } from "react-router-dom/dist/umd/react-router-dom.development";

const UserLayout = () => {
  return (
    <div width="100%" height="100%">
      <Box>
        <NavBar />
        <Grid container>
          <Grid item xs={12} md={4}>
            <div> sidebar</div>
          </Grid>
          <Grid item xs={12} md={8}>
            <div>
              <Outlet />
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default UserLayout;
