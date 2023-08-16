import mongoose from "mongoose";

// Define the Offender schema
const offenderSchema = new mongoose.Schema({
  personalInformation: {
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    gender: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, required: true },
    photo: {type: String},
    physicalDescription: { type: String },
    contactInformation1: { type: String },
    contactInformation2: { type: String },
    aliases: [{ type: String }],
    IDtype: {type: String},
    IDnumber: {type: String}
  },
 
  arrestRecords: [{
    arrestDateTime: { type: Date },
    arrestLocation: { type: String },
    arrestingAgency: { type: String },
    arrestingOfficer: { type: String },
    arrestingOfficerID: { type: String },
    charges: [{ type: String }]
  }],
  chargeAndConvictionHistory: [{
    charge: { type: String, },
    offenseNature: { type: String },
    courtCaseNumber: { type: String },
    ChargeDate: { type: Date },
    convicted: { type: String },
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
    offenseType: { type: String,},
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
    warrantType: { type: String, },
    warrantDetails: { type: String }
  }],
  victimInformation: [{
    name: { type: String },
    victimDetails: { type: String },
    victimSupportServices: [{ type: String }]
  }],
}, {timestamps: true});

// Create the Offender model
const Offender = mongoose.model('Offender', offenderSchema);

export default Offender;
