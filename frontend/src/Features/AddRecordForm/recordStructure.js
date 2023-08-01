export const recordStructure = {personalInformation: {
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
}