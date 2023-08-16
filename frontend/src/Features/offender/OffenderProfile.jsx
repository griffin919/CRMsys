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
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "70%",
        }}
      >
        <ConfirmInput formData={ClickedRecord[0]} photo={""} />
        <Button variant="contained" onClick={() => navigate("/record/update")}>
          Update
        </Button>
        <Button
          sx={{ margin: "10px" }}
          variant="contained"
          onClick={handleDeleteRecord}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default OffenderProfile;
