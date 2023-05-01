"use client";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/themes";
import CssBaseline from "@mui/material/CssBaseline";
const MuiTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MuiTheme;
