import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
  
const OffenderSlice = createSlice({
    name: "offenderRecords",
    initialState,
    reducers: {
        saveAllRecords: (state, action)=>{
            return action.payload
        },
    }
})

export const {
    saveAllRecords, 
    } = OffenderSlice.actions
export default OffenderSlice.reducer;