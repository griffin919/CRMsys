import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    records: localStorage.getItem('records') ? JSON.parse(localStorage.getItem('records')) : null,
    recordID: localStorage.getItem('recordID') ? JSON.parse(localStorage.getItem('recordID')) :null,
    searchResults: null,
};
  
const OffenderSlice = createSlice({
    name: "offenderRecords",
    initialState,
    reducers: {
        saveAllRecords: (state, action)=>{
            state.records = action.payload
            localStorage.setItem('records', JSON.stringify(action.payload));
        },
        saveClickedRecordID: (state, action)=>{
            state.recordID = action.payload
            localStorage.setItem('recordID', JSON.stringify(action.payload));
        },
        saveSearchResults: (state, action)=>{
            state.searchResults = action.payload
        },
    }
})

export const {
    saveAllRecords, 
    saveClickedRecordID,
    saveSearchResults,
    } = OffenderSlice.actions
export default OffenderSlice.reducer;