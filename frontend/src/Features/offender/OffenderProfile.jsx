import React from "react";
import { useSelector } from "react-redux";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ConfirmInput from "../AddRecordForm/ConfirmInputComp";
import {
  useDeleteRecordMutation,
  useGetRecordsQuery,
} from "../user/userApiSlice";
import { saveAllRecords } from "./OffenderSlice";

const OffenderProfile = () => {
  const navigate = useNavigate();
  const { refetch: refetchOnDelete } = useGetRecordsQuery();
  const { recordID, records } = useSelector((state) => state.offenderRecords);
  const ClickedRecord = records.find((record) => record._id === recordID);

  const [deleteRecord, { isLoading }] = useDeleteRecordMutation();

  const handleDeleteRecord = () => {
    if (!ClickedRecord) {
      console.error("Record not found");
      return;
    }

    const { _id: recordID } = ClickedRecord;

    deleteRecord(recordID)
      .then(() => {
        refetchOnDelete();
        navigate("/dashboard");
      })
      .catch((err) => console.error("Something went wrong", err));
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
        {ClickedRecord && <ConfirmInput formData={ClickedRecord} photo={""} />}
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
