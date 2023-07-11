import React, { useState } from "react";
import { Button, Snackbar } from "@mui/material";

const ToastNotification = ({ message }) => {
  const [open, setOpen] = useState(false); // State to control open/closed state of the notification

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Show Notification
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={message}
      />
    </div>
  );
};

export default ToastNotification;
