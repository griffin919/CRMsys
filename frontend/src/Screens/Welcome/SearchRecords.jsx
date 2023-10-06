import { useGetRecordsQuery } from "../../Features/user/userApiSlice";
import {
  saveAllRecords,
  saveClickedRecordID,
} from "../../Features/offender/OffenderSlice";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import SearchComp from "../../functions/SearchComp";

const SearchRecords = () => {
  // const [displayDataGrid, setDisplayDataGrid] = useState("none");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveClickedRecordID(null));
  });

  // Destructure the data from the query hook
  const { data, isSuccess, isLoading, error } = useGetRecordsQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );

  //save click column/record id
  //and setProfileActive to true so when can clear recordID -
  //from global state anytime we return home
  const handleCellDoubleClick = (params) => {
    dispatch(saveClickedRecordID(params.row.id));
    navigate("/record");
  };

  const records = useSelector((state) => state.offenderRecords.records);
  const searchResults = useSelector(
    (state) => state.offenderRecords.searchResults
  );
  console.log("searchResults: ", searchResults);

  // const [dataToRender, setDataToRender] = useState({ ...records });

  if (isLoading && records == null) {
    return (
      <div>
        <Typography>
          Loading records... <CircularProgress />
        </Typography>
      </div>
    );
  } else if (isSuccess) {
    // Dispatch the saveAllRecords action only if records are not yet saved in Redux
    dispatch(saveAllRecords(data));
  } else if (error && records == null) {
    return (
      <div>
        <Typography>Error loading records!</Typography>
      </div>
    );
    console.log(error);
  }

  const renderedRecordObj =
    searchResults && Object.values(searchResults).length > 0
      ? searchResults
      : {};

  const columns = [
    { field: "name", headerName: "Name", minWidth: 200 },
    { field: "gender", headerName: "Gender", minWidth: 100 },
    { field: "dateOfBirth", headerName: "Date of Birth", minWidth: 150 },
    { field: "contactInformation1", headerName: "Contact", minWidth: 150 },
    { field: "offenseType", headerName: "Offense Type", minWidth: 200 },
    { field: "convicted", headerName: "Convicted", minWidth: 100 },
  ];

  const rows = Object.values(renderedRecordObj).map((record) => ({
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
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexDirection: "column",
        }}
      >
        <div>
          <SearchComp />
        </div>
        <div>
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
      </div>
    </>
  );
};

export default SearchRecords;
