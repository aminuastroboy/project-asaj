import "./globals.css";

export const metadata = {
  title: "ASAJ Full UI Campaign Website",
  description: "Official campaign website for Hon. Abdulkareem Sabo Abdullahi (ASAJ)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
