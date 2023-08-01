import {
  InputBase,
  Box,
  useTheme,
  IconButton,
  Typography,
  Link,
  TextField,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import FlexBetween from "../../components/FlexBetween";
import RecordsScreen from "../../Features/AddRecordForm/AddRecord";
import { useNavigate } from "react-router-dom";
import OffenderQueryScreen from "../../Features/offender/OffenderQueryScreen";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveSearchResults } from "../../Features/offender/OffenderSlice";
import { useGetRecordsQuery } from "../../Features/user/userApiSlice";

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
      if (filteredRecords && filteredRecords !== []) {
        dispatch(saveSearchResults(filteredRecords));
      }
    }
  };

  const theme = useTheme();
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box
        display="flex"
        alignItems="start"
        justifyContent="center"
        sx={{ mb: "30px" }}
      >
        <FlexBetween
          backgroundColor={theme.palette.background.alt}
          borderRadius="20px"
          p="0.1rem 1rem"
          gap="3rem"
        >
          <InputBase
            placeholder="Search record..."
            sx={{ border: "none" }}
            onChange={handleSearch}
          />
          <IconButton>
            <Search />
          </IconButton>
        </FlexBetween>
        <FlexBetween m="0px 50px ">
          <Link
            href=""
            onClick={() => navigate("/record/add")}
            underline="none"
          >
            Add Record
          </Link>
          <IconButton onClick={() => navigate("/record/add")}>
            <AddIcon />
          </IconButton>
        </FlexBetween>
      </Box>
      <Box>
        <OffenderQueryScreen />
      </Box>
    </Box>
  );
};

export default DashScreen;
