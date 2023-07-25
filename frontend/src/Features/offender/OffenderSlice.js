import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    records: localStorage.getItem('records') ? JSON.parse(localStorage.getItem('records')) :null,
    recordID: "",
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
        },
    }
})

export const {
    saveAllRecords, 
    saveClickedRecordID,
    } = OffenderSlice.actions
export default OffenderSlice.reducer;