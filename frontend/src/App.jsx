import { useMemo, useState } from "react";

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import LoginScreen from "./Screens/Login/LoginScreen";
import { CssBaseline, createTheme } from "@mui/material";
import { themeSettings } from "./theme";
import { ThemeProvider } from "@emotion/react";
import DashScreen from "./Screens/Dashboard/DashScreen";
import Layout from "./Screens/Layout/Layout";
import { useSelector } from "react-redux";

const App = () => {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route element={<Layout />}>
              {/* Remember to change path to /dashboard */}
              <Route path="/dashboard" element={<DashScreen />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
