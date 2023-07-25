import React from "react";
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
import { AddRecordFormContext } from "./formContextApi";
import { useContext } from "react";

const ConfirmInput = () => {
  const { FormData, photo } = useContext(AddRecordFormContext);
  const personalInformation = FormData.personalInformation;
  const arrestRecords = FormData.arrestRecords;
  const chargeAndConvictionHistory = FormData.chargeAndConvictionHistory;
  const sentencingAndCorrectionalRecords =
    FormData.sentencingAndCorrectionalRecords;
  const courtRecords = FormData.courtRecords;
  const warrantsAndAlerts = FormData.warrantsAndAlerts;
  const victimInformation = FormData.victimInformation;
  const criminalOffenseDetails = FormData.criminalOffenseDetails;

  const styles = {
    table: {
      border: "none",
    },
    tableCell: {
      borderBottom: "none",
    },
  };

  return (
    <Grid container spacing={6} mt="20px">
      <Grid item md={12}>
        <Grid container spacing={6}>
          <Grid item md={6}>
            <TableContainer>
              <Table style={styles.table}>
                <Typography sx={{ fontSize: "20px", textAlign: "left" }}>
                  {" Personal Information"}
                </Typography>
                <TableBody key={personalInformation.IDnumber}>
                  <TableRow>
                    <Grid container spacing={6}>
                      {/* <Grid item md={12}>
                        <TableCell style={styles.tableCell}>Photo:</TableCell>
                      </Grid> */}
                      <Grid item md={12}>
                        <TableCell style={styles.tableCell}>
                          {photo && (
                            <img
                              src={URL.createObjectURL(photo)}
                              alt="Uploaded Image"
                              // width="200px"
                              height="200px"
                            />
                          )}
                        </TableCell>
                      </Grid>
                    </Grid>
                  </TableRow>
                  <TableRow>
                    <TableCell style={styles.tableCell}>First Name:</TableCell>
                    <TableCell style={styles.tableCell}>
                      {personalInformation.fname}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={styles.tableCell}>First Name:</TableCell>
                    <TableCell style={styles.tableCell}>
                      {personalInformation.fname}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={styles.tableCell}>Last Name:</TableCell>
                    <TableCell style={styles.tableCell}>
                      {personalInformation.lname}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item md={6}>
            <TableContainer>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell style={styles.tableCell}>
                      Date of Birth:
                    </TableCell>
                    <TableCell style={styles.tableCell}>
                      {personalInformation.dateOfBirth.toString()}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={styles.tableCell}>Gender:</TableCell>
                    <TableCell style={styles.tableCell}>
                      {personalInformation.gender}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={styles.tableCell}>
                      Physical Description:
                    </TableCell>
                    <TableCell style={styles.tableCell}>
                      {personalInformation.physicalDescription}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={styles.tableCell}>
                      Contact Information 1:
                    </TableCell>
                    <TableCell style={styles.tableCell}>
                      {personalInformation.contactInformation1}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={styles.tableCell}>
                      Contact Information 2:
                    </TableCell>
                    <TableCell style={styles.tableCell}>
                      {personalInformation.contactInformation2}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={styles.tableCell}>ID Type:</TableCell>
                    <TableCell style={styles.tableCell}>
                      {personalInformation.IDtype}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={styles.tableCell}>ID Number:</TableCell>
                    <TableCell style={styles.tableCell}>
                      {personalInformation.IDnumber}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={styles.tableCell}>
                      Known Aliases:
                    </TableCell>
                    <TableCell style={styles.tableCell}>
                      {personalInformation.aliases}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={6}>
        <Typography sx={{ fontSize: "20px", textAlign: "left" }}>
          {"Arrest Records"}
        </Typography>
        <TableContainer>
          <Table>
            <TableBody key={arrestRecords.arrestingOfficerID}>
              <TableRow>
                <TableCell style={styles.tableCell}>Date of Arrest:</TableCell>
                <TableCell style={styles.tableCell}>
                  {arrestRecords.arrestDateTime}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={styles.tableCell}>
                  Location of Arrest:
                </TableCell>
                <TableCell style={styles.tableCell}>
                  {arrestRecords.arrestLocation}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={styles.tableCell}>
                  Arresting Agency:
                </TableCell>
                <TableCell style={styles.tableCell}>
                  {arrestRecords.arrestingAgency}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={styles.tableCell}>
                  Arresting Officer:
                </TableCell>
                <TableCell style={styles.tableCell}>
                  {arrestRecords.arrestingOfficer}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={styles.tableCell}>
                  Arresting Officer ID:
                </TableCell>
                <TableCell style={styles.tableCell}>
                  {arrestRecords.arrestingOfficerID}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={styles.tableCell}>Charges:</TableCell>
                <TableCell style={styles.tableCell}>
                  {arrestRecords.charges}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item md={6}>
        <Typography sx={{ fontSize: "20px", textAlign: "left" }}>
          {"Charge and Conviction History"}
        </Typography>
        <TableContainer>
          <Table>
            <TableBody key={chargeAndConvictionHistory.courtCaseNumber}>
              <TableRow sx={{ border: "none" }}>
                <TableCell style={styles.tableCell}>Charge:</TableCell>
                <TableCell style={styles.tableCell}>
                  {chargeAndConvictionHistory.charge}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={styles.tableCell}>Offense Nature:</TableCell>
                <TableCell style={styles.tableCell}>
                  {chargeAndConvictionHistory.offenseNature}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={styles.tableCell}>
                  Court Case Number:
                </TableCell>
                <TableCell style={styles.tableCell}>
                  {chargeAndConvictionHistory.courtCaseNumber}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={styles.tableCell}>Charge Date:</TableCell>
                <TableCell style={styles.tableCell}>
                  {chargeAndConvictionHistory.ChargeDate}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={styles.tableCell}>Convicted:</TableCell>
                <TableCell style={styles.tableCell}>
                  {chargeAndConvictionHistory.convicted}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={styles.tableCell}>
                  Sentencing Details:
                </TableCell>
                <TableCell style={styles.tableCell}>
                  {chargeAndConvictionHistory.sentencingDetails}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item md={6}>
        <Typography sx={{ fontSize: "20px", textAlign: "left" }}>
          {"Sentencing and Correctional Records"}
        </Typography>
        <TableContainer>
          <Table>
            <TableBody key={sentencingAndCorrectionalRecords.sentenceType}>
              <TableRow>
                <TableCell style={styles.tableCell}>Sentence Type:</TableCell>
                <TableCell style={styles.tableCell}>
                  {sentencingAndCorrectionalRecords.sentenceType}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={styles.tableCell}>
                  Sentence Duration:
                </TableCell>
                <TableCell style={styles.tableCell}>
                  {sentencingAndCorrectionalRecords.duration}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={styles.tableCell}>Release Date:</TableCell>
                <TableCell style={styles.tableCell}>
                  {sentencingAndCorrectionalRecords.releaseDate}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={styles.tableCell}>
                  Parole or Probation Conditions:
                </TableCell>
                <TableCell style={styles.tableCell}>
                  {sentencingAndCorrectionalRecords.paroleOrProbationConditions}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={styles.tableCell}>
                  Correction Facility:
                </TableCell>
                <TableCell style={styles.tableCell}>
                  {sentencingAndCorrectionalRecords.CorrectionFacility}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={styles.tableCell}>
                  Sentence Modifications:
                </TableCell>
                <TableCell style={styles.tableCell}>
                  {sentencingAndCorrectionalRecords.sentenceModifications}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item md={6}>
        <Typography sx={{ fontSize: "20px", textAlign: "left" }}>
          {"Criminal Offense Details"}
        </Typography>
        <TableContainer>
          <Table>
            <TableBody key={criminalOffenseDetails.date}>
              <TableRow>
                <TableCell style={styles.tableCell}>Offense Type:</TableCell>
                <TableCell style={styles.tableCell}>
                  {criminalOffenseDetails.offenseType}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={styles.tableCell}>Date of Offense:</TableCell>
                <TableCell style={styles.tableCell}>
                  {criminalOffenseDetails.date}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={styles.tableCell}>Location:</TableCell>
                <TableCell style={styles.tableCell}>
                  {criminalOffenseDetails.location}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={styles.tableCell}>Victim Details:</TableCell>
                <TableCell style={styles.tableCell}>
                  {criminalOffenseDetails.victimDetails}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={styles.tableCell}>
                  Additional Details:
                </TableCell>
                <TableCell style={styles.tableCell}>
                  {criminalOffenseDetails.additionalDetails}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item md={6}>
        <Typography sx={{ fontSize: "20px", textAlign: "left" }}>
          {"Court Records"}
        </Typography>
        <TableContainer>
          <Table>
            <TableBody key={courtRecords.hearingDate}>
              <TableRow>
                <TableCell style={styles.tableCell}>
                  Court Appearence Date:
                </TableCell>
                <TableCell style={styles.tableCell}>
                  {courtRecords.courtAppearance}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={styles.tableCell}>Hearing Date:</TableCell>
                <TableCell style={styles.tableCell}>
                  {courtRecords.hearingDate}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={styles.tableCell}>Court Order:</TableCell>
                <TableCell style={styles.tableCell}>
                  {courtRecords.courtOrder}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={styles.tableCell}>Case Summary:</TableCell>
                <TableCell style={styles.tableCell}>
                  {courtRecords.caseSummary}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={styles.tableCell}>Legal Documents:</TableCell>
                <TableCell style={styles.tableCell}>
                  {courtRecords.legalDocuments}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item md={6}>
        <Grid container>
          <Grid item md={12}>
            <Typography sx={{ fontSize: "20px", textAlign: "left" }}>
              {"Warrants and Alerts"}
            </Typography>
            <TableContainer>
              <Table>
                <TableBody key={warrantsAndAlerts.warrantType}>
                  <TableRow>
                    <TableCell style={styles.tableCell}>
                      Warrant Type:
                    </TableCell>
                    <TableCell style={styles.tableCell}>
                      {warrantsAndAlerts.warrantType}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={styles.tableCell}>
                      Warrant Details:
                    </TableCell>
                    <TableCell style={styles.tableCell}>
                      {warrantsAndAlerts.warrantDetails}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item md={12}>
            <Typography sx={{ fontSize: "20px", textAlign: "left" }}>
              {"Victim Information"}
            </Typography>
            <TableContainer>
              <Table>
                <TableBody key={victimInformation.IDnumber}>
                  <TableRow>
                    <TableCell style={styles.tableCell}>Victim Name:</TableCell>
                    <TableCell style={styles.tableCell}>
                      {victimInformation.name}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={styles.tableCell}>
                      Contact Details:
                    </TableCell>
                    <TableCell style={styles.tableCell}>
                      {victimInformation.contactDetails}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={styles.tableCell}>
                      Victim Support Services:
                    </TableCell>
                    <TableCell style={styles.tableCell}>
                      {victimInformation.victimSupportServices}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>

      <Box>
        <Button type="submit">Submit</Button>
      </Box>
    </Grid>
  );
};

export default ConfirmInput;
