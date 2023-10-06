import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Box width="50%" height="50%">
        <Grid container spacing={2}>
          <Grid item md={6} className="WelcomeDiv">
            <Button onClick={() => navigate("/dashboard")}>View Records</Button>
          </Grid>
          <Grid item md={6} className="WelcomeDiv">
            <Button onClick={() => navigate("/record/search")}>
              Search Records
            </Button>
          </Grid>
          <Grid item md={6} className="WelcomeDiv">
            <Button>View Users</Button>
          </Grid>
          <Grid item md={6} className="WelcomeDiv">
            <Button>Manage Records</Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default WelcomeScreen;
