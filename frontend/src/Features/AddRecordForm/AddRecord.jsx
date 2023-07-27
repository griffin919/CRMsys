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
import { useAddRecordMutation } from "../user/userApiSlice";

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
        date: "",
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

  const [addRecord, { isLoading }] = useAddRecordMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (uploadedPhoto) {
        RecordFormData.photo = uploadedPhoto;
      }
      // console.log("AddRecord", RecordFormData);
      const Record = await addRecord(RecordFormData);

      if (!Record.error) {
        console.log("Record added successfully", Record);
      }
    } catch (error) {
      console.log(error);
    }
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

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setRecordFormData((prevState) => ({
      ...prevState,
      personalInformation: {
        ...prevState.personalInformation,
        [name]: value,
      },
      arrestRecords: {
        ...prevState.arrestRecords,
        [name]: value,
      },
    }));
  };

  const handleDateChange = (date) => {
    setRecordFormData((prevState) => ({
      ...prevState,
      personalInformation: {
        ...prevState.personalInformation,
        dateOfBirth: date,
      },
      arrestRecords: {
        ...prevState.arrestRecords,
        arrestDateTime: date,
      },
    }));
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
        return <ChargesComponent />;
      case 3:
        return <SentencingAndCorrectionalRecords />;
      case 4:
        return <CriminalOffenseDetails />;
      case 5:
        return <CourtRecords />;
      case 6:
        return <WarrantsAndAlerts />;
      case 7:
        return <VictimInformation />;
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
