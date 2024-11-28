import "../app/globals.css";

export const metadata = {
  title: "Code Editor",
  description: "Online Code Editor with multiple language support",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
