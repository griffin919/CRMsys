import { useMemo, useState } from "react";

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import LoginScreen from "./Screens/Login/LoginScreen";
import { CssBaseline, createTheme } from "@mui/material";
import { themeSettings } from "./theme";
import { ThemeProvider } from "@emotion/react";
import DashScreen from "./Screens/Dashboard/DashScreen";
import Layout from "./Screens/Layout/Layout";
import UserLayout from "./Screens/Layout/UserLayout";
import { useSelector } from "react-redux";
import AddRecord from "./Features/AddRecordForm/AddRecord";
import OffenderProfile from "./Features/offender/OffenderProfile";
import UpdateRecord from "./Features/AddRecordForm/UpdateRecord";
import UsersScreen from "./Features/user/UsersScreen";
import RegisterUser from "./Features/user/RegisterUser";
import UpdateUser from "./Features/user/UpdateUser";
import WelcomeScreen from "./Screens/Welcome/WelcomeScreen";
import SearchRecords from "./Screens/Welcome/SearchRecords";
import FaceRecognitionComponent from "./Screens/Welcome/FaceRecognitionComponent";

const App = () => {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route index="true" path="/" element={<LoginScreen />} />
            <Route index="true" path="/welcome" element={<WelcomeScreen />} />
            <Route element={<Layout />}>
              <Route path="/user/update" element={<UpdateUser />} />
              <Route path="/user/register" element={<RegisterUser />} />
              <Route path="/user" element={<UsersScreen />} />
              <Route path="/dashboard" element={<DashScreen />} />
              <Route path="/record/add" element={<AddRecord />} />
              <Route path="/record" element={<OffenderProfile />} />
              <Route path="/record/update" element={<UpdateRecord />} />
              <Route path="/record/search" element={<SearchRecords />} />
              <Route
                path="/record/photo-search"
                element={<FaceRecognitionComponent />}
              />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
