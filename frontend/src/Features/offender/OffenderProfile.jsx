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
import {
  useDeleteRecordMutation,
  useGetRecordsQuery,
} from "../user/userApiSlice";
import { useDispatch } from "react-redux";
import { saveAllRecords } from "./OffenderSlice";

const OffenderProfile = () => {
  const navigate = useNavigate();
  const { refetch: refetchOnDelete } = useGetRecordsQuery();

  const { recordID, records } = useSelector((state) => state.offenderRecords);
  const ClickedRecord = records.filter((record) => record._id === recordID);

  const [deleteRecord, { isLoading }] = useDeleteRecordMutation();

  const handleDeleteRecord = () => {
    console.log("recordID: ", recordID);
    deleteRecord(recordID)
      .then(() => {
        refetchOnDelete();
        navigate("/dashboard");
      })
      .catch((err) => console.log("Something went wrong", err));
  };

  return (
    <div>
      <ConfirmInput formData={ClickedRecord[0]} photo={""} />
      <Button onClick={() => navigate("/record/update")}>Update</Button>
      <Button onClick={handleDeleteRecord}>Delete</Button>
    </div>
  );
};

export default OffenderProfile;
