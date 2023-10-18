import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Typography, CircularProgress } from "@mui/material";
import dayjs from "dayjs";
import SearchComp from "../../functions/SearchComp";
import { DataGrid } from "@mui/x-data-grid";
import { useGetRecordsQuery } from "../../Features/user/userApiSlice";
import {
  saveAllRecords,
  saveClickedRecordID,
} from "../../Features/offender/OffenderSlice";

const SearchRecords = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const records = useSelector((state) => state.offenderRecords.records);

  const searchResults = useSelector(
    (state) => state.offenderRecords.searchResults
  );

  // Reset clicked record ID when the component mounts
  useEffect(() => {
    dispatch(saveClickedRecordID(null));
  }, [dispatch]);

  const { data, isSuccess, isLoading, error } = useGetRecordsQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );

  // If there's an error or loading, display appropriate messages
  if (isLoading && !data) {
    return (
      <div>
        <Typography>
          Loading records... <CircularProgress size={25} />
        </Typography>
      </div>
    );
  } else if (isSuccess && data) {
    // Check if the records haven't been saved already
    if (!records || records.length === 0) {
      dispatch(saveAllRecords(data));
    }
  } else if (error && !data) {
    return (
      <div>
        <Typography>Error loading records!</Typography>
      </div>
    );
  }

  // Create an array of columns
  const columns = [
    { field: "name", headerName: "Name", minWidth: 200 },
    { field: "gender", headerName: "Gender", minWidth: 100 },
    { field: "dateOfBirth", headerName: "Date of Birth", minWidth: 150 },
    { field: "contactInformation1", headerName: "Contact", minWidth: 150 },
    { field: "offenseType", headerName: "Offense Type", minWidth: 200 },
    { field: "convicted", headerName: "Convicted", minWidth: 100 },
  ];

  // Prepare the rows for the DataGrid
  const renderedRecordObj =
    searchResults && Object.values(searchResults).length > 0
      ? searchResults
      : "";
  const rows = Object.values(renderedRecordObj).map((record) => ({
    id: record._id,
    name: `${record.personalInformation.fname} ${record.personalInformation.lname}`,
    gender: record.personalInformation.gender,
    dateOfBirth: dayjs(record.personalInformation.dateOfBirth).format(
      "YYYY-MM-DD"
    ),
    contactInformation1: record.personalInformation.contactInformation1,
    offenseType: record.criminalOffenseDetails.offenseType,
    convicted: record.chargeAndConvictionHistory.convicted,
  }));

  // Define the double-click action for DataGrid
  const handleCellDoubleClick = (params) => {
    dispatch(saveClickedRecordID(params.row.id));
    navigate("/record");
  };

  return (
    <div>
      <img
        src="/gps_logo.png"
        alt="gps logo"
        style={{ width: "8%", position: "absolute", top: "60px" }}
      />
      <DataGrid
        rows={rows}
        columns={columns}
        sx={{ border: "none", cursor: "pointer" }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        getRowId={(row) => row.id}
        pageSizeOptions={[10, 20]}
        onCellDoubleClick={handleCellDoubleClick}
      />
    </div>
  );
};

export default SearchRecords;
