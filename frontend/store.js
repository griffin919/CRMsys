import { configureStore } from "@reduxjs/toolkit";
import { userApiSlice } from "./src/Features/user/userApiSlice";
import authSlice from "./src/Features/user/authSlice";
import globalSlice from "./src/Features/app/darkModeSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        global:  globalSlice,
        [userApiSlice.reducerPath]: userApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApiSlice.middleware),
    devTools: true,
  });
  
export default store;