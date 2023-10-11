import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";

const WelcomeScreen = () => {
  const [displayElement, setDisplayElement] = useState("");

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    userInfo.user.role === "admin" ? "" : setDisplayElement("none");
    console.log(displayElement);
  });

  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
      }}
    >
      <Typography sx={{ fontSize: "2rem" }}>Galloway CRMS</Typography>
      <Typography sx={{ fontSize: "1.1rem", margin: "20px" }}>
        Select a function to perform
      </Typography>
      <Box
        width="50%"
        height="50%"
        sx={{ padding: "25px", borderRadius: "10px" }}
      >
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
            <Button onClick={() => navigate("/record/photo-search")}>
              Image Recognition
            </Button>
          </Grid>
          <Grid
            item
            md={6}
            className="WelcomeDiv"
            sx={{ display: displayElement }}
          >
            <Button onClick={() => navigate("/user")}>Manage Accounts </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default WelcomeScreen;
