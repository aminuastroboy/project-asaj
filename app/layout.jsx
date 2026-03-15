import "./globals.css";

export const metadata = {
  title: "ASAJ 2027 Campaign",
  description: "Official campaign website for Hon. Abdulkareem Sabo Abdullahi (ASAJ)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
