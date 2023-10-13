import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typography, CircularProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import dayjs from "dayjs";
import {
  saveAllRecords,
  saveClickedRecordID,
} from "../../Features/offender/OffenderSlice";

import { useGetRecordsQuery } from "../user/userApiSlice";

const OffenderQueryScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveClickedRecordID(null));
  }, [dispatch]);

  const { data, isSuccess, isLoading, error } = useGetRecordsQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );

  // console.log("data: ", data);

  if (isLoading) {
    return (
      <div>
        <Typography>
          Loading records... <CircularProgress size={25} />
        </Typography>
      </div>
    );
  } else if (isSuccess && data) {
    dispatch(saveAllRecords(data));
  } else if (error) {
    return (
      <div>
        <Typography>Error loading records!</Typography>
      </div>
    );
  }

  // const records = useSelector((state) => state.offenderRecords.records);
  // const searchResults = useSelector(
  //   (state) => state.offenderRecords.searchResults
  // );
  // const [dataToRender, setDataToRender] = useState(records);

  const handleCellDoubleClick = (params) => {
    dispatch(saveClickedRecordID(params.row.id));
    navigate("/record");
  };

  const columns = [
    { field: "name", headerName: "Name", minWidth: 200 },
    { field: "gender", headerName: "Gender", minWidth: 100 },
    { field: "dateOfBirth", headerName: "Date of Birth", minWidth: 150 },
    { field: "contactInformation1", headerName: "Contact", minWidth: 150 },
    { field: "offenseType", headerName: "Offense Type", minWidth: 200 },
    { field: "convicted", headerName: "Convicted", minWidth: 100 },
  ];

  const rows = Object.values(data).map((record) => ({
    id: record._id,
    name: `${record.personalInformation.fname} ${record.personalInformation.lname}`,
    gender: record.personalInformation.gender,
    dateOfBirth: dayjs(record.personalInformation.dateOfBirth).format(
      "YYYY-MM-DD"
    ),
    contactInformation1: record.personalInformation.contactInformation1,
    offenseType: record.personalInformation.offenseType,
    convicted: record.chargeAndConvictionHistory.convicted,
  }));

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        color: "#000",
      }}
    >
      <div>
        <DataGrid
          rows={rows}
          columns={columns}
          sx={{ border: "none", cursor: "pointer", color: "#000" }}
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
    </div>
  );
};

export default OffenderQueryScreen;
