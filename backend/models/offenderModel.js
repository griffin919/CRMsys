import mongoose from "mongoose";

// Define the Offender schema
const offenderSchema = new mongoose.Schema({
  personalInformation: {
    name: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, required: true },
    physicalDescription: { type: String },
    contactInformation1: { type: String },
    contactInformation2: { type: String },
    aliases: [{ type: String }]
  },
  identification: {
    IDtype: {type: String, required: true},
    governmentIDs: [{ type: String }],
    biometricData: { type: String }
  },
  arrestRecords: [{
    date: { type: Date, required: true },
    time: { type: String },
    location: { type: String },
    arrestingAgency: { type: String },
    arrestingOfficer: { type: String },
    charges: [{ type: String }]
  }],
  chargeAndConvictionHistory: [{
    charge: { type: String, required: true },
    offenseNature: { type: String },
    courtCaseNumber: { type: String },
    date: { type: Date },
    convicted: { type: Boolean },
    sentencingDetails: { type: String }
  }],
  sentencingAndCorrectionalRecords: [{
    sentenceType: { type: String },
    duration: { type: String },
    releaseDate: { type: Date },
    paroleOrProbationConditions: { type: String },
    CorrectionFacility: { type: String },
    sentenceModifications: { type: String }
  }],
  criminalOffenseDetails: [{
    offenseType: { type: String, required: true },
    date: { type: Date },
    location: { type: String },
    victimDetails: { type: String },
    additionalDetails: { type: String }
  }],
  courtRecords: [{
    courtAppearance: { type: Date },
    hearingDate: { type: Date },
    courtOrder: { type: String },
    caseSummary: { type: String },
    legalDocuments: [{ type: String }]
  }],
  warrantsAndAlerts: [{
    warrantType: { type: String, required: true },
    warrantDetails: { type: String }
  }],
  victimInformation: [{
    name: { type: String },
    contactDetails: { type: String },
    victimSupportServices: [{ type: String }]
  }],
  //anyOther Details
  documentation: [{ type: String }]
});

// Create the Offender model
const Offender = mongoose.model('Offender', offenderSchema);

module.exports = Offender;
