import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import dayjs from "dayjs";

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

  const formatDate = (date) => {
    return date ? dayjs(date).format("DD-MM-YYYY") : null;
  };

  const renderArrestRecords = (dataAtIndex) => {
    const arrestDateTime = formatDate(dataAtIndex.arrestDateTime);

    return (
      <div>
        <div>
          <strong>Arrest Date/Time:</strong>{" "}
          {arrestDateTime
            ? dayjs(arrestDateTime).format("DD-MM-YYYYTHH:mm:ss A")
            : null}
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
        {renderCol("Charge", dataAtIndex.charge)}
        {renderCol("Offense Nature", dataAtIndex.offenseNature)}
        {renderCol("Court Case Number", dataAtIndex.courtCaseNumber)}
        {renderCol("Date", formatDate(dataAtIndex.ChargeDate))}
        {/* {console.log(
          "dataAtIndex.date",
          dataAtIndex.date.toString(),
          "formatDate(dataAtIndex.date)",
          formatDate(dataAtIndex.date)
        )} */}
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
        {renderCol("Release Date", formatDate(dataAtIndex.releaseDate))}
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
    const date = formatDate(dataAtIndex.date);

    return (
      <div>
        {renderCol("Offense Type", dataAtIndex.offenseType)}
        {renderCol("Date", formatDate(dataAtIndex.date))}
        {renderCol("Location", dataAtIndex.location)}
        {renderCol("Victim Details", dataAtIndex.victimDetails)}
        {renderCol("Additional Details", dataAtIndex.additionalDetails)}
      </div>
    );
  };

  const renderCourtRecords = (dataAtIndex) => {
    return (
      <div>
        {renderCol("Court Appearance", formatDate(dataAtIndex.courtAppearance))}
        {renderCol("Hearing Date", formatDate(dataAtIndex.hearingDate))}
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
        {renderCol("Victim Details", dataAtIndex.victimDetails)}
        {renderCol(
          "Victim Support Services",
          dataAtIndex.victimSupportServices
        )}
      </div>
    );
  };

  const renderSection = (title, name, renderFuncRef) => {
    return (
      <React.Fragment>
        <Typography variant="h6">{title}</Typography>
        {Object.entries(name).map(([index, data]) => (
          <React.Fragment key={index}>
            <Typography>Record: {parseInt(index) + 1}</Typography>
            {renderFuncRef(data)}
          </React.Fragment>
        ))}
      </React.Fragment>
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
            {formatDate(personalInformation.dateOfBirth)}
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
          <div>
            {photo && (
              <img
                style={{ width: "200px" }}
                src={URL.createObjectURL(photo)}
                alt="Offender Photo"
              />
            )}
          </div>
        </Grid>
        <Grid container spacing={2} mt="10px">
          <Grid item md={6}>
            {renderSection("Arrest Record", arrestRecords, renderArrestRecords)}
          </Grid>
          <Grid item md={6}>
            {renderSection(
              "Charge And Conviction History",
              chargeAndConvictionHistory,
              renderChargeAndConvictionHistory
            )}
          </Grid>
        </Grid>
        <Grid container spacing={2} mt="10px">
          <Grid item md={6}>
            {renderSection(
              "Sentencing And Correctional Records",
              sentencingAndCorrectionalRecords,
              renderSentencingAndCorrectionalRecords
            )}
          </Grid>
          <Grid item md={6}>
            {renderSection(
              "Criminal Offense Details",
              criminalOffenseDetails,
              renderCriminalOffenseDetails
            )}
          </Grid>
        </Grid>
        <Grid container spacing={2} mt="10px">
          <Grid item md={6}>
            {renderSection("Court Records", courtRecords, renderCourtRecords)}
          </Grid>
          <Grid item md={6}>
            {renderSection(
              "Warrants And Alerts",
              warrantsAndAlerts,
              renderWarrantsAndAlerts
            )}
          </Grid>
        </Grid>
        <Grid container spacing={2} mt="10px">
          <Grid item md={6}>
            {renderSection(
              "Victim Information",
              victimInformation,
              renderVictimInformation
            )}
          </Grid>
          <Grid item md={6}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ConfirmInput;
