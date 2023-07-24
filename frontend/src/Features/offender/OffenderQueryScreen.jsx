import { useEffect, useState } from "react";
import { useGetRecordsQuery } from "../user/userApiSlice";
import { saveAllRecords } from "./OffenderSlice";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const OffenderQueryScreen = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [records, setRecords] = useState([]);
  const { data, getRecords, isLoading, error } = useGetRecordsQuery(); // Destructure the data from the query hook

  const { userInfo } = useSelector((state) => state.auth);
  const { offenderRecords } = useSelector((state) => state.offenderRecords);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!offenderRecords) {
      const fetchRecords = async () => {
        try {
          const fetchedRecords = await getRecords();
          dispatch(saveAllRecords(fetchedRecords));
          setRecords(fetchedRecords);
        } catch (error) {
          console.log("Record fetch error", error);
        }
      };
      if (userInfo) {
        fetchRecords();
      }
    }
  }, [userInfo, getRecords, dispatch, offenderRecords]);

  //----------------------------------------------

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>{JSON.stringify(error)}</Typography>;
  }

  return <Typography>Hello </Typography>;
};

export default OffenderQueryScreen;
