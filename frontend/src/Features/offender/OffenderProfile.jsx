import React from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
import ConfirmInput from "../AddRecordForm/ConfirmInputComp";

const OffenderProfile = () => {
  const navigate = useNavigate();

  const { recordID, records } = useSelector((state) => state.offenderRecords);
  const ClickedRecord = records.filter((record) => record._id === recordID);
  console.log("ClickedRecord[0])", ClickedRecord[0]);

  return (
    <div>
      <ConfirmInput formData={ClickedRecord[0]} photo={""} />
      <Button onClick={() => navigate("/record/update")}>Update</Button>
    </div>
  );
};

export default OffenderProfile;
