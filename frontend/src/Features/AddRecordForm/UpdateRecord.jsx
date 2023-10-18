import * as React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Button } from "@mui/material";
import PersonalInfoComponent from "./PersonalInfoComponent";
import ArrestsComponent from "./ArrestsComponent";
import ChargesComponent from "./ChargesComponent";
import CourtRecords from "./CourtRecords";
import CriminalOffenseDetails from "./CriminalOffenseDetails";
import ConfirmInput from "./ConfirmInputComp";
import SentencingAndCorrectionalRecords from "./sentencingAndCorrectionalRecords";
import VictimInformation from "./VictimInformation";
import WarrantsAndAlerts from "./WarrantsAndAlerts";
import {
  useUpdateRecordMutation,
  useGetRecordsQuery,
} from "../user/userApiSlice";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

export default function UpdateRecord() {
  const [step, setStep] = useState(0);
  const [uploadedPhoto, setuploadedPhoto] = useState(null);
  const { refetch: refetchOnUpdate } = useGetRecordsQuery();

  const navigate = useNavigate();

  const { recordID, records } = useSelector((state) => state.offenderRecords);
  const initialState = records.filter((record) => record._id === recordID);

  const {
    personalInformation,
    arrestRecords,
    chargeAndConvictionHistory,
    sentencingAndCorrectionalRecords,
    courtRecords,
    warrantsAndAlerts,
    victimInformation,
    criminalOffenseDetails,
  } = initialState[0];

  const [recordToUpdate, setRecordToUpdate] = useState({
    personalInformation,
    arrestRecords,
    chargeAndConvictionHistory,
    sentencingAndCorrectionalRecords,
    courtRecords,
    warrantsAndAlerts,
    victimInformation,
    criminalOffenseDetails,
  });

  const [updateRecord, { isLoading }] = useUpdateRecordMutation();

  const handleUpdate = (e) => {
    // e.preventDefault();
    // try {
    //   if (uploadedPhoto) {
    //     recordToUpdate.photo = uploadedPhoto;
    //   }

    //   const updatedRecord = await updateRecord(
    //     { id: recordID },
    //     recordToUpdate
    //   );

    // console.log("recordToUpdate", recordToUpdate);

    if (uploadedPhoto) {
      recordToUpdate.photo = uploadedPhoto;
    }
    e.preventDefault();
    updateRecord({ id: recordID, data: recordToUpdate })
      .then(() => {
        console.log("Update sent");
        navigate("/dashboard");
      })
      .catch((err) => console.log("Something went wrong", err));
  };

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleStepChange = (event, newVal) => {
    setStep(newVal);
  };

  const renderTabSection = () => {
    switch (step) {
      case 0:
        return (
          <PersonalInfoComponent
            formData={recordToUpdate}
            setForm={setRecordToUpdate}
            setUploadedPic={setuploadedPhoto}
          />
        );
      case 1:
        return (
          <ArrestsComponent
            formData={recordToUpdate}
            setForm={setRecordToUpdate}
          />
        );
      case 2:
        return (
          <ChargesComponent
            formData={recordToUpdate}
            setForm={setRecordToUpdate}
          />
        );
      case 3:
        return (
          <SentencingAndCorrectionalRecords
            formData={recordToUpdate}
            setForm={setRecordToUpdate}
          />
        );
      case 4:
        return (
          <CriminalOffenseDetails
            formData={recordToUpdate}
            setForm={setRecordToUpdate}
          />
        );
      case 5:
        return (
          <CourtRecords formData={recordToUpdate} setForm={setRecordToUpdate} />
        );
      case 6:
        return (
          <WarrantsAndAlerts
            formData={recordToUpdate}
            setForm={setRecordToUpdate}
          />
        );
      case 7:
        return (
          <VictimInformation
            formData={recordToUpdate}
            setForm={setRecordToUpdate}
          />
        );
      case 8:
        return <ConfirmInput formData={recordToUpdate} photo={uploadedPhoto} />;
      default:
        return null;
    }
  };

  return (
    <Box>
      <Box>
        <form onSubmit={handleUpdate} encType="multipart/form-data">
          <Box
            sx={{
              flexGrow: 1,
              maxWidth: { xs: 320, sm: 580, md: 900 },
              bgcolor: "none",
            }}
          >
            <Tabs
              value={step}
              onChange={handleStepChange}
              variant="scrollable"
              scrollButtons
              aria-label="visible arrows tabs example"
              sx={{
                [`& .${tabsClasses.scrollButtons}`]: {
                  "&.Mui-disabled": { opacity: 0.3 },
                },
              }}
            >
              <Tab label="Personal Info" />
              <Tab label="Arrests" />
              <Tab label="Charges" />
              <Tab label="Sentences" />
              <Tab label="Offenses" />
              <Tab label="Court Records" />
              <Tab label="Warrants" />
              <Tab label="Victims" />
              <Tab label="Confirm" />
            </Tabs>

            {/* Render selected tab section */}
            {renderTabSection()}
          </Box>
        </form>
      </Box>
      {/* Step navigation buttons */}
      <Box mt={2} textAlign="right">
        {step > 0 && (
          <Button
            type="button"
            variant="contained"
            size="large"
            onClick={handlePreviousStep}
          >
            Previous
          </Button>
        )}
        {step < 8 && (
          <Button
            type="button"
            variant="contained"
            size="large"
            onClick={handleNextStep}
          >
            Next
          </Button>
        )}
      </Box>
      <Button
        type="submit"
        variant="contained"
        size="large"
        onClick={handleUpdate}
      >
        Update
      </Button>
    </Box>
  );
}
