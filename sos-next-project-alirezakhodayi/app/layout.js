import "./globals.css";

import MuiTheme from "../utils/theme/theme-provider";

export const metadata = {
  title: "ٔSOS | صفحه اصلی",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <MuiTheme>
        <body>{children}</body>
      </MuiTheme>
    </html>
  );
}
