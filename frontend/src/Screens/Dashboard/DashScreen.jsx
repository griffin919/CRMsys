import React, { useEffect, useState } from "react";
import {
  InputBase,
  Box,
  useTheme,
  IconButton,
  Link,
  Grid,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import FlexBetween from "../../components/FlexBetween";
import { useNavigate } from "react-router-dom";
import OffenderQueryScreen from "../../Features/offender/OffenderQueryScreen";
import { useDispatch, useSelector } from "react-redux";
import { saveSearchResults } from "../../Features/offender/OffenderSlice";

const DashScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const records = useSelector((state) => state.offenderRecords.records);

  const handleSearch = (e) => {
    let searchVal = e.target.value;

    if (searchVal) {
      const filteredRecords = Object.values(records).filter(
        (record) =>
          record.personalInformation.fname.toLowerCase() ==
            searchVal.toLowerCase() ||
          record.personalInformation.lname.toLowerCase() ==
            searchVal.toLowerCase()
      );
      if (filteredRecords && filteredRecords != []) {
        dispatch(saveSearchResults(filteredRecords));
      }
    }
  };

  const theme = useTheme();
  return (
    <Box>
      <Grid container>
        <Grid item md={12} sx={{ mb: "20px" }}>
          <div
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            style={{ mb: "30px", textAlign: "center" }}
          >
            <div
              style={{
                backgroundColor: `${theme.palette.background.paper}`,
                padding: "7px 20px",
                marginRight: "30px",
                borderRadius: "30px",
                display: "inline",
              }}
            >
              <InputBase
                placeholder="Search record..."
                onChange={handleSearch}
              />
              <IconButton>
                <Search />
              </IconButton>
              {/* <FlexBetween m="0px 50px "> */}
            </div>
            <div style={{ display: "inline" }}>
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
