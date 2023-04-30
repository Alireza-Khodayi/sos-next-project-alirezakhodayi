"use client";
// import "../global.css";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/themes";
import CssBaseline from "@mui/material/CssBaseline";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
