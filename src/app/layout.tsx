import "../app/globals.css";

export const metadata = {
  title: "Code Editor",
  description: "Online Code Editor with multiple language support",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
