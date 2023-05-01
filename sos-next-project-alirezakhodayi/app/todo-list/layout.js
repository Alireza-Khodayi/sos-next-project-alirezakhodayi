import MuiTheme from "../theme/theme-provider";

export const metadata = {
  title: "ٔSOS | Todo List",
};

export default function TodoListLayout({ children }) {
  return (
    <html lang="fa" dir="ltr">
      <MuiTheme>
        <body>{children}</body>
      </MuiTheme>
    </html>
  );
}
