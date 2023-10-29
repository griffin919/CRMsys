import { Box, Button, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";

const WelcomeScreen = () => {
  const [displayElement, setDisplayElement] = useState("");

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    userInfo.user.role === "admin" ? "" : setDisplayElement("none");
    console.log(displayElement);
  }, [userInfo.user.role, displayElement]);

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
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img src="./gps_logo.png" alt="Police logo" style={{ width: "70%" }} />
      </Box>
      <Typography sx={{ fontSize: "2rem" }}>Galloway CRMS</Typography>
      <Typography sx={{ fontSize: "1.1rem" }}>
        Select a function to perform
      </Typography>
      <Box
        width="50%"
        height="50%"
        sx={{ padding: "25px", borderRadius: "10px" }}
      >
        <Grid container spacing={1}>
          <Grid item md={4} className="WelcomeDiv">
            <Button onClick={() => navigate("/dashboard")}>View Records</Button>
          </Grid>
          <Grid
            item
            md={4}
            className="WelcomeDiv"
            sx={{ display: displayElement }}
          >
            <Button onClick={() => navigate("/record/add")}>Add Record</Button>
          </Grid>
          <Grid item md={4} className="WelcomeDiv">
            <Button onClick={() => navigate("/record/search")}>
              Search Records
            </Button>
          </Grid>

          <Grid
            item
            md={4}
            className="WelcomeDiv"
            sx={{ display: displayElement }}
          >
            <Button onClick={() => navigate("/user")}>Manage Accounts </Button>
          </Grid>
          <Grid item md={8} className="WelcomeDiv">
            <Button onClick={() => navigate("/record/photo-search")}>
              Image Recognition
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default WelcomeScreen;
