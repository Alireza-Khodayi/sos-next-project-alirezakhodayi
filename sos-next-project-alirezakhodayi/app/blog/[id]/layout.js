import MuiTheme from "@/app/theme/theme-provider";

export default function BlogPostLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <MuiTheme>
        <body>{children}</body>
      </MuiTheme>
    </html>
  );
}
