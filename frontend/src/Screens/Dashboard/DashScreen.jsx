import React, { useEffect, useState } from "react";
import {
  InputBase,
  Box,
  useTheme,
  IconButton,
  Link,
  Grid,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import FlexBetween from "../../components/FlexBetween";
import { useNavigate } from "react-router-dom";
import OffenderQueryScreen from "../../Features/offender/OffenderQueryScreen";
import { useDispatch, useSelector } from "react-redux";
import SearchComp from "../../functions/SearchComp";
import SearchRecords from "../Welcome/SearchRecords";

const DashScreen = () => {
  const [displayElement, setDisplayElement] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    userInfo.user.role === "admin" ? "" : setDisplayElement("none");
    console.log(displayElement);
  });

  const records = useSelector((state) => state.offenderRecords.records);

  // const handleSearch = (e) => {
  //   let searchVal = e.target.value;

  //   if (searchVal) {
  //     const filteredRecords = Object.values(records).filter(
  //       (record) =>
  //         record.personalInformation.fname.toLowerCase() ==
  //           searchVal.toLowerCase() ||
  //         record.personalInformation.lname.toLowerCase() ==
  //           searchVal.toLowerCase()
  //     );
  //     if (filteredRecords && filteredRecords != []) {
  //       dispatch(saveSearchResults(filteredRecords));
  //     }
  //   }
  // };

  const theme = useTheme();
  return (
    <Box
      sx={{
        margin: "30px 0 0 0",
        height: "100vh",
        width: "80vw",
        padding: "10px",
        overflow: "hidden",
      }}
    >
      {/* <Box
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      > */}
      <img
        src="/gps_logo.png"
        alt="gps logo"
        style={{ width: "8%", position: "absolute", top: "60px" }}
      />
      {/* </Box> */}
      <Grid container>
        <Grid item md={12} xs={12} sx={{ mb: "20px" }}>
          <div
            style={{
              mb: "30px",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
              // flexDirection: "column",
            }}
          >
            {/* <SearchComp searchData={records} /> */}
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                width: "100%",
              }}
            >
              <Link
                href=""
                onClick={() => navigate("/record/add")}
                underline="none"
                sx={{
                  color: "white",
                  border: "1px solid grey",
                  padding: "10px 40px",
                  borderRadius: "5px",
                  backgroundColor: "#273576",
                  display: displayElement,
                }}
                gap="20px"
              >
                Add Record +
              </Link>
              {/* <IconButton onClick={() => navigate("/record/add")}>
                <AddIcon />
              </IconButton> */}
            </div>
          </div>
        </Grid>
        <Grid
          item
          md={12}
          sx={{
            // backgroundColor: "#273576",
            border: "solid 1px grey",
            padding: "0 20px",
            borderRadius: "10px",
            margin: "20px 0 0 0",
          }}
        >
          {/* <SearchRecords /> */}
          <OffenderQueryScreen />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashScreen;
