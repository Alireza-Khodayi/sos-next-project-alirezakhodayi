"use client";
import { createTheme } from "@mui/material/styles";
import localFont from "next/font/local";

let theme = createTheme({
  palette: {
    primary: {
      main: "#1158A7",
    },
    // secondary: {
    //   main: "#edf2ff",
    // },
  },
  direction: "rtl",
  typography: {
    fontFamily: "IranSans, Roboto",
  },
});

export default theme;
