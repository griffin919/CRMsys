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

const DashScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    <Box>
      <Grid container>
        <Grid item md={12} xs={12} sx={{ mb: "20px" }}>
          <div
            style={{
              mb: "30px",
              textAlign: "center",
              // display: "flex",
              // alignItems: "center",
              // justifyContent: "center",
              // flexDirection: "column",
            }}
          >
            {/* <SearchComp searchData={records} /> */}
            <div style={{ display: "inline", width: "20%" }}>
              <Link
                href=""
                onClick={() => navigate("/record/add")}
                underline="none"
                sx={{ color: `${theme.palette.background.alt}` }}
                gap="20px"
              >
                Add Record
              </Link>
              <IconButton onClick={() => navigate("/record/add")}>
                <AddIcon />
              </IconButton>
            </div>
          </div>
        </Grid>
        <Grid item md={12}>
          <OffenderQueryScreen />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashScreen;
