import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { AddRecordFormContext } from "./formContextApi";
import { useContext } from "react";

const ConfirmInput = ({ formData, photo }) => {
  const {
    personalInformation,
    arrestRecords,
    chargeAndConvictionHistory,
    sentencingAndCorrectionalRecords,
    courtRecords,
    warrantsAndAlerts,
    victimInformation,
    criminalOffenseDetails,
  } = formData;

  const renderCol = (name, value) => {
    return (
      <React.Fragment>
        <div>
          <strong>{name}:</strong> {value}
        </div>
      </React.Fragment>
    );
  };

  const renderArrestRecords = (dataAtIndex) => {
    return (
      <div>
        <div>
          <strong>Arrest Date/Time:</strong>{" "}
          {dataAtIndex.arrestDateTime
            ? dataAtIndex.arrestDateTime.toString()
            : ""}
        </div>
        <div>
          <strong>Arrest Location:</strong> {dataAtIndex.arrestLocation}
        </div>
        <div>
          <strong>Arresting Agency:</strong> {dataAtIndex.arrestingAgency}
        </div>
        <div>
          <strong>Arresting Officer:</strong> {dataAtIndex.arrestingOfficer}
        </div>
        <div>
          <strong>Arresting Officer's ID:</strong>{" "}
          {dataAtIndex.arrestingOfficerID}
        </div>
        <div>
          <strong>Charges:</strong> {dataAtIndex.charges}
        </div>
      </div>
    );
  };

  const renderChargeAndConvictionHistory = (dataAtIndex) => {
    return (
      <div>
        {renderCol("Charge", dataAtIndex.charges)}
        {renderCol("Offense Nature", dataAtIndex.offenseNature)}
        {renderCol("Court Case Number", dataAtIndex.courtCaseNumber)}
        {renderCol("Date", dataAtIndex.date)}
        {renderCol("Convicted", dataAtIndex.convicted)}
        {renderCol("Sentencing Details", dataAtIndex.sentencingDetails)}
      </div>
    );
  };
  const renderSentencingAndCorrectionalRecords = (dataAtIndex) => {
    return (
      <div>
        {renderCol("Sentence Type", dataAtIndex.sentenceType)}
        {renderCol("Duration", dataAtIndex.duration)}
        {renderCol("Release Date", dataAtIndex.releaseDate)}
        {renderCol(
          "Parole Or Probation Conditions",
          dataAtIndex.paroleOrProbationConditions
        )}
        {renderCol("Correction Facility", dataAtIndex.CorrectionFacility)}
        {renderCol("Sentence Modifications", dataAtIndex.sentenceModifications)}
      </div>
    );
  };

  const renderCriminalOffenseDetails = (dataAtIndex) => {
    return (
      <div>
        {renderCol("Offense Type", dataAtIndex.offenseType)}
        {renderCol("Date", dataAtIndex.date)}
        {renderCol("Location", dataAtIndex.location)}
        {renderCol("Victim Details", dataAtIndex.victimDetails)}
        {renderCol("Additional Details", dataAtIndex.additionalDetails)}
      </div>
    );
  };
  const renderCourtRecords = (dataAtIndex) => {
    return (
      <div>
        {renderCol("Court Appearance", dataAtIndex.courtAppearance)}
        {renderCol("Hearing Date", dataAtIndex.hearingDate)}
        {renderCol("Court Order", dataAtIndex.courtOrder)}
        {renderCol("Case Summary", dataAtIndex.caseSummary)}
        {renderCol("Legal Documents", dataAtIndex.legalDocuments)}
      </div>
    );
  };
  const renderWarrantsAndAlerts = (dataAtIndex) => {
    return (
      <div>
        {renderCol("Warrant Type", dataAtIndex.warrantType)}
        {renderCol("Warrant Details", dataAtIndex.warrantDetails)}
      </div>
    );
  };
  const renderVictimInformation = (dataAtIndex) => {
    return (
      <div>
        {renderCol("Victim Name", dataAtIndex.name)}
        {renderCol("Contact Details", dataAtIndex.contactDetails)}
        {renderCol(
          "Victim Support Services",
          dataAtIndex.victimSupportServices
        )}
      </div>
    );
  };

  return (
    <Box mt="20px">
      <Typography variant="h4">Confirm Input</Typography>

      <Grid container spacing={2} mt="10px">
        <Grid item md={6}>
          <Typography variant="h6">Personal Information</Typography>
          <div>
            <strong>First Name:</strong> {personalInformation.fname}
          </div>
          <div>
            <strong>Last Name:</strong> {personalInformation.lname}
          </div>
          <div>
            <strong>Date of Birth:</strong>{" "}
            {personalInformation.dateOfBirth.toString()}
          </div>
          <div>
            <strong>ID Type:</strong> {personalInformation.IDtype}
          </div>
          <div>
            <strong>ID Number:</strong> {personalInformation.IDnumber}
          </div>
          <div>
            <strong>Physical Description:</strong>{" "}
            {personalInformation.physicalDescription}
          </div>
          <div>
            <strong>Contact Information 1:</strong>{" "}
            {personalInformation.contactInformation1}
          </div>
          <div>
            <strong>Contact Information 2:</strong>{" "}
            {personalInformation.contactInformation2}
          </div>
          <div>
            <strong>Aliases:</strong> {personalInformation.aliases}
          </div>
        </Grid>
        <Grid item md={6}>
          {photo && (
            <img src={URL.createObjectURL(photo)} alt="Offender Photo" />
          )}
        </Grid>
        <Grid container spacing={2} mt="10px">
          <Grid item md={6}>
            <Typography variant="h6">Arrest Record</Typography>
            {Object.entries(arrestRecords).map(([index, data]) => (
              <React.Fragment key={index}>
                <Typography>Record: {parseInt(index) + 1}</Typography>
                {renderArrestRecords(data)}
              </React.Fragment>
            ))}
          </Grid>
          <Grid item md={6}>
            <Typography variant="h6">Charge And Conviction History</Typography>
            {Object.entries(chargeAndConvictionHistory).map(([index, data]) => (
              <React.Fragment key={index}>
                <Typography>Record: {parseInt(index) + 1}</Typography>
                {renderChargeAndConvictionHistory(data)}
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
        <Grid container spacing={2} mt="10px">
          <Grid item md={6}>
            <Typography variant="h6">
              Sentencing And Correctional Records
            </Typography>

            {Object.entries(sentencingAndCorrectionalRecords).map(
              ([index, data]) => (
                <React.Fragment key={index}>
                  <Typography>Record: {parseInt(index) + 1}</Typography>
                  {renderSentencingAndCorrectionalRecords(data)}
                </React.Fragment>
              )
            )}
          </Grid>
          <Grid item md={6}>
            <Typography variant="h6">Criminal Offense Details</Typography>
            {Object.entries(criminalOffenseDetails).map(([index, data]) => (
              <React.Fragment key={index}>
                <Typography>Record: {parseInt(index) + 1}</Typography>
                {renderSentencingAndCorrectionalRecords(data)}
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
        <Grid container spacing={2} mt="10px">
          <Grid item md={6}>
            <Typography variant="h6">Court Records</Typography>

            {Object.entries(courtRecords).map(([index, data]) => (
              <React.Fragment key={index}>
                <Typography>Record: {parseInt(index) + 1}</Typography>
                {renderCourtRecords(data)}
              </React.Fragment>
            ))}
          </Grid>
          <Grid item md={6}>
            <Typography variant="h6">Warrants And Alerts</Typography>
            {Object.entries(warrantsAndAlerts).map(([index, data]) => (
              <React.Fragment key={index}>
                <Typography>Record: {parseInt(index) + 1}</Typography>
                {renderWarrantsAndAlerts(data)}
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
        <Grid container spacing={2} mt="10px">
          <Grid item md={6}>
            <Typography variant="h6">Victim Information</Typography>
            {Object.entries(victimInformation).map(([index, data]) => (
              <React.Fragment key={index}>
                <Typography>Record: {parseInt(index) + 1}</Typography>
                {renderVictimInformation(data)}
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default ConfirmInput;
