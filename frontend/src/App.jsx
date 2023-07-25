import { useMemo, useState } from "react";

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import LoginScreen from "./Screens/Login/LoginScreen";
import { CssBaseline, createTheme } from "@mui/material";
import { themeSettings } from "./theme";
import { ThemeProvider } from "@emotion/react";
import DashScreen from "./Screens/Dashboard/DashScreen";
import Layout from "./Screens/Layout/Layout";
import { useSelector } from "react-redux";
import AddRecord from "./Features/AddRecordForm/AddRecord";
import OffenderProfile from "./Features/offender/OffenderProfile";
import UpdateRecord from "./Features/UpdateRecordForm/UpdateRecord";

const App = () => {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route index="true" path="/login" element={<LoginScreen />} />
            <Route element={<Layout />}>
              {/* Remember to change path to /dashboard */}
              <Route path="/" element={<DashScreen />} />
              <Route path="/records/add" element={<AddRecord />} />
              <Route path="/records/record" element={<OffenderProfile />} />
              <Route path="/record/update" element={<UpdateRecord />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
