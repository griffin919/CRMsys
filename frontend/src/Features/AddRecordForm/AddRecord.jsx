import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { AddRecordFormContext } from "./formContextApi";
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
import { useAddRecordMutation, useGetRecordsQuery } from "../user/userApiSlice";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";

export default function AddRecord() {
  const [step, setStep] = useState(0);
  const [uploadedPhoto, setuploadedPhoto] = useState(null);
  const [RecordFormData, setRecordFormData] = useState({
    personalInformation: {
      fname: "",
      lname: "",
      gender: "",
      dateOfBirth: "",
      photo: "",
      IDtype: "",
      IDnumber: "",
      physicalDescription: "",
      contactInformation1: "",
      contactInformation2: "",
      aliases: "",
    },
    arrestRecords: [
      {
        arrestDateTime: "",
        arrestLocation: "",
        arrestingAgency: "",
        arrestingOfficer: "",
        arrestingOfficerID: "",
        charges: "",
      },
    ],
    chargeAndConvictionHistory: [
      {
        charge: "",
        offenseNature: "",
        courtCaseNumber: "",
        ChargeDate: "",
        convicted: "",
        sentencingDetails: "",
      },
    ],
    sentencingAndCorrectionalRecords: [
      {
        sentenceType: "",
        duration: "",
        releaseDate: "",
        paroleOrProbationConditions: "",
        CorrectionFacility: "",
        sentenceModifications: "",
      },
    ],
    criminalOffenseDetails: [
      {
        offenseType: "",
        date: "",
        location: "",
        victimDetails: "",
        additionalDetails: "",
      },
    ],
    courtRecords: [
      {
        courtAppearance: "",
        hearingDate: "",
        courtOrder: "",
        caseSummary: "",
        legalDocuments: "",
      },
    ],
    warrantsAndAlerts: [
      {
        warrantType: "",
        warrantDetails: "",
      },
    ],
    victimInformation: [
      {
        name: "",
        contactDetails: "",
        victimSupportServices: "",
      },
    ],
  });
  const { refetch: refetchOnDelete } = useGetRecordsQuery();
  const navigate = useNavigate();

  const [addRecord, { isLoading }] = useAddRecordMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    addRecord(RecordFormData)
      .then(() => refetchOnDelete())
      .then(() => navigate("/record/add"))
      .catch((err) => console.log("Something went wrong ", err));
    // try {
    //   if (uploadedPhoto) {
    //     RecordFormData.photo = uploadedPhoto;
    //   }
    //   // console.log("AddRecord", RecordFormData);
    //   const Record = await addRecord(RecordFormData);
    //   refetchOnDelete();
    //   navigate("/record/add");
    // } catch (error) {
    //   console.log(error);
    // }
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

  const handlePhotoInput = (e) => {
    const file = e.target.files[0];
    setuploadedPhoto(file);
  };

  const renderTabSection = () => {
    switch (step) {
      case 0:
        return (
          <PersonalInfoComponent
            formData={RecordFormData}
            setForm={setRecordFormData}
            setUploadedPic={setuploadedPhoto}
          />
        );
      case 1:
        return (
          <ArrestsComponent
            formData={RecordFormData}
            setForm={setRecordFormData}
          />
        );
      case 2:
        return (
          <ChargesComponent
            formData={RecordFormData}
            setForm={setRecordFormData}
          />
        );
      case 3:
        return (
          <SentencingAndCorrectionalRecords
            formData={RecordFormData}
            setForm={setRecordFormData}
          />
        );
      case 4:
        return (
          <CriminalOffenseDetails
            formData={RecordFormData}
            setForm={setRecordFormData}
          />
        );
      case 5:
        return (
          <CourtRecords formData={RecordFormData} setForm={setRecordFormData} />
        );
      case 6:
        return (
          <WarrantsAndAlerts
            formData={RecordFormData}
            setForm={setRecordFormData}
          />
        );
      case 7:
        return (
          <VictimInformation
            formData={RecordFormData}
            setForm={setRecordFormData}
          />
        );
      case 8:
        return <ConfirmInput formData={RecordFormData} photo={uploadedPhoto} />;
      default:
        return null;
    }
  };

  return (
    <AddRecordFormContext.Provider
      value={{
        RecordFormData,
        setRecordFormData,
        uploadedPhoto,
        setuploadedPhoto,
      }}
    >
      <Box>
        <Box>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
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
              variant="outlined"
              size="large"
              onClick={handlePreviousStep}
            >
              Previous
            </Button>
          )}
          {step < 8 && (
            <Button
              type="button"
              variant="outlined"
              size="large"
              onClick={handleNextStep}
            >
              Next
            </Button>
          )}
        </Box>
      </Box>
    </AddRecordFormContext.Provider>
  );
}
