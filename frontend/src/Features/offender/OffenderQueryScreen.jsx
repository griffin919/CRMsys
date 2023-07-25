import { useEffect, useState } from "react";
import { useGetRecordsQuery } from "../user/userApiSlice";
import { saveAllRecords, saveClickedRecordID } from "./OffenderSlice";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useGetSingleRecordQuery } from "../user/userApiSlice";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";

const OffenderQueryScreen = () => {
  const navigate = useNavigate();

  const {
    data: ofdrRecords,
    isSuccess,
    isLoading,
    error,
  } = useGetRecordsQuery(); // Destructure the data from the query hook

  const handleCellDoubleClick = (params) => {
    console.log("id", params.row.id);
    dispatch(saveClickedRecordID(params.row.id));

    navigate("/records/record");
  };

  const dispatch = useDispatch();

  const records = useSelector((state) => state.offenderRecords.records);

  if (isLoading && records == null) {
    return (
      <div>
        <Typography>Loading records...</Typography>
      </div>
    );
  } else if (isSuccess) {
    if (records == null) {
      // Dispatch the saveAllRecords action only if records are not yet saved in Redux
      dispatch(saveAllRecords(ofdrRecords));
    }
  } else if (error && records == null) {
    return (
      <div>
        <Typography>Error loading records!</Typography>
      </div>
    );
    console.log(error);
  }

  const columns = [
    { field: "name", headerName: "Name" },
    { field: "gender", headerName: "Gender" },
    { field: "convicted", headerName: "Convicted" },
  ];

  //   const srecords = records;

  const rows = records.map((record) => ({
    id: record._id,
    name: `${record.personalInformation.fname} ${record.personalInformation.lname}`,
    gender: record.personalInformation.gender,
    convicted: record.chargeAndConvictionHistory.convicted,
  }));

  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
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

export default OffenderQueryScreen;