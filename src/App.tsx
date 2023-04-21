import React, { FC, ReactElement } from "react";
import "./App.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { customTheme } from "./theme/customTheme";
import Dashboard from "./pages/Dashboard/Dashboard";

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline>
        <Dashboard />
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
