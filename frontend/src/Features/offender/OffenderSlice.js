import { createSlice } from "@reduxjs/toolkit";

const initialState = {offenderData: {}};

const OffenderSlice = createSlice({
    name: "offenderData",
    initialState,
    reducers: {
        savePersonalInfo: (state, action)=>{
            state.offenderData.personalInformation = {
                ...state.offenderData.personalInformation,
                ...action.payload,
            }
        },
        saveArrestsinfo: (state, action) => {
            state.offenderData.arrestRecords = {
                ...state.offenderData.arrestRecords,
                ...action.payload,
            }
        },
        saveChargesAndConvictionHistory: (state, action) => {
            state.offenderData.chargeAndConvictionHistory = {
                ...state.offenderData.chargeAndConvictionHistory,
                ...action.payload,
            }
        },
        savesentencingAndCorrectionalRecords: (state, action) => {
            state.offenderData.sentencingAndCorrectionalRecords = {
                ...state.offenderData.sentencingAndCorrectionalRecords,
                ...action.payload,
            }
        },
        saveCriminalOffenseDetails: (state, action) => {
            state.offenderData.criminalOffenseDetails = {
                ...state.offenderData.criminalOffenseDetails,
                ...action.payload,
            }
        },
        saveWarrantsAndAlerts: (state, action) => {
            state.offenderData.criminalOffenseDetails = {
                ...state.offenderData.criminalOffenseDetails,
                ...action.payload,
            }
        },
        saveVictimInformation: (state, action) => {
            state.offenderData.victimInformation = {
                ...state.offenderData.victimInformation,
                ...action.payload,
            }
        },
        saveOtherDocumentations: (state, action) => {
            state.offenderData.otherDocumentation = {
                ...state.offenderData.otherDocumentation,
                ...action.payload,
            }
        }
        

    
    }
})

export const {
    savePersonalInfo, 
    saveArrestsinfo, 
    saveChargesAndConvictionHistory,
    savesentencingAndCorrectionalRecords,
    saveCriminalOffenseDetails,
    saveWarrantsAndAlerts,
    saveVictimInformation,
    saveOtherDocumentations} = OffenderSlice.actions
export default OffenderSlice.reducer;