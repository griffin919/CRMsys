import { configureStore } from "@reduxjs/toolkit";
import  userApiSlice from "./src/Features/user/userApiSlice";
import { combineReducers } from "@reduxjs/toolkit";
// import offenderRecordApiSlice from "./src/Features/offender/offenderApiSlice";
import authSlice from "./src/Features/user/authSlice";
import globalSlice from "./src/Features/app/darkModeSlice";
import OffenderSlice from "./src/Features/offender/OffenderSlice";

const rootReducer = combineReducers({
    auth: authSlice,
    global:  globalSlice,
    offenderRecords: OffenderSlice,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    // [offenderRecordApiSlice.reducerPath]: offenderRecordApiSlice.reducer,
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(userApiSlice.middleware),
    devTools: true,
    
  });
  
export default store;