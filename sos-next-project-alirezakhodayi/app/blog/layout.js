// import "../global.css";

import MuiTheme from "../theme/theme-provider";

export const metadata = {
  title: "ٔSOS | وبلاگ",
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
