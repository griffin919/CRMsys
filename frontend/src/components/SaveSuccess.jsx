import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const SaveSuccess = () => {
  return (
    <Box>
      <Alert severity="success" sx={{ display: displayAddRecordSuccess }}>
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert>
    </Box>
  );
};

export default SaveSuccess;
