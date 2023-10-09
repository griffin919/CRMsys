import React, { useState } from "react";
import { saveSearchResults } from "../Features/offender/OffenderSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Group, Search } from "@mui/icons-material";
import { InputBase, Box, useTheme, IconButton, Input } from "@mui/material";
import axios from "axios";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import PhotoRecog from "./PhotoRecog";
import SearchRecords from "../Screens/Welcome/SearchRecords";

const SearchComp = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchDate, setsearchDate] = useState("");
  const [QueryPic, setQueryPic] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const baseUrl = "http://localhost:3000/api/record/search";
  // const baseUrl = "api/record/search";

  const handleSearch = () => {
    console.log("searchQuery: ", searchQuery);
    axios
      .get(`${baseUrl}/${searchQuery}`)
      .then((response) => {
        dispatch(saveSearchResults(response.data.data));
      })
      .catch((err) => console.log("Error occured", err.response.data.message));
  };

  const handleDateSearch = () => {
    const searchDateString = dayjs(searchDate).format("YYYY-MM-DD");
    console.log("searchDateString: ", searchDateString);
    axios
      .get(`${baseUrl}/${searchDateString}`)
      .then((response) => {
        dispatch(saveSearchResults(response.data.data));
      })
      .catch((err) => console.log("Error occured", err.response.data.message));
  };

  const theme = useTheme();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "30px 0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              // backgroundColor: `${theme.palette.background.paper}`,
              padding: "7px 20px",
              marginRight: "30px",
              borderRadius: "5px",
              display: "inline",
              border: "1px solid grey",
            }}
          >
            <InputBase
              placeholder="Search name..."
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <IconButton
              sx={{ backgroundColor: "#C70039" }}
              onClick={handleSearch}
            >
              <Search sx={{ color: "#fff" }} />
            </IconButton>
            {/* <FlexBetween m="0px 50px "> */}
          </div>
          <Box
            sx={{ display: "inline", display: "flex", alignItems: "center" }}
          >
            <DatePicker
              label="Search Date of Birth"
              name="searchDate"
              value={searchDate}
              onChange={(date) => setsearchDate(date)}
              slotProps={{ TextField: { variant: "standard" } }}
            />
            <IconButton
              onClick={handleDateSearch}
              sx={{ backgroundColor: "#C70039", marginLeft: "10px" }}
            >
              <Search sx={{ color: "#fff" }} />
            </IconButton>
          </Box>
        </Box>

        <Box
          sx={{
            // backgroundColor: "#C70039",
            border: "1px solid grey",
            padding: "0 20px",
            borderRadius: "10px",
            margin: "20px 0 0 0",
          }}
        >
          <SearchRecords />
        </Box>
      </div>
    </LocalizationProvider>
  );
};

export default SearchComp;
