import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useTheme } from "@emotion/react";
import { useSelector } from "react-redux";

const ConfirmInput = ({ formData, photo }) => {
  const theme = useTheme();
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
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        {Object.entries(name).map(([index, data]) => (
          <React.Fragment key={index}>
            <Typography sx={{ fontSize: "12px", opacity: "0.6" }}>
              Record: {parseInt(index) + 1}
            </Typography>
            {renderFuncRef(data)}
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  };

  const GridStyle = {
    border: "1px solid ",
    padding: "15px 40px",
    borderRadius: "10px",
  };

  const isOffenderProfile = useSelector(
    (state) => state.offenderRecords.recordID
  );

  // console.log("personalInformation.photo", personalInformation.photo);
  return (
    <Box>
      <Typography
        sx={{ m: "40px 0", textAlign: "center", fontWeight: "bold" }}
        variant="h4"
      >
        {isOffenderProfile
          ? `${personalInformation.fname}'s record`
          : "Confirm Input"}
      </Typography>

      <Grid container>
        <Grid item xs={12} md={6}>
          <div
            style={{
              padding: "0 30px 0 0",
              width: "250px",
              height: "250px",
              overflow: "hidden",
            }}
          >
            {isOffenderProfile
              ? personalInformation.photo && (
                  <img
                    // style={{ maxWidth: "300px" }}
                    src={`http://localhost:3000/api/uploads/${personalInformation.photo}`}
                    alt="Offender Photo"
                    style={{
                      width: "100%",
                      height: "100%",
                      // overflow: "hidden",
                      borderRadius: "10px",
                      objectFit: "cover",
                    }}
                  />
                )
              : photo && (
                  <img
                    // style={{ maxWidth: "300px" }}
                    style={{
                      width: "100%",
                      height: "100%",
                      // overflow: "hidden",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                    src={URL.createObjectURL(photo)}
                    alt="Offender Photo"
                  />
                )}
          </div>
        </Grid>
        <Grid item md={6} xs={12} style={GridStyle}>
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            Personal Information
          </Typography>
          <div>
            <strong>First Name: </strong> {personalInformation.fname}
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
      </Grid>
      <Grid container mt="20px" style={GridStyle}>
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
      <Grid container mt="20px" style={GridStyle}>
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
      <Grid container mt="20px" style={GridStyle}>
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
      <Grid container mt="20px" style={GridStyle}>
        <Grid item md={6}>
          {renderSection(
            "Victim Information",
            victimInformation,
            renderVictimInformation
          )}
        </Grid>
        <Grid item md={6}>
          {/* {isOffenderProfile ? (
            <Button type="submit" variant="contained" color="primary">
              Update
            </Button>
          ) : null} */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ConfirmInput;
