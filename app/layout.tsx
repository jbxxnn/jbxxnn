import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Binda Systems | Digital Studio for Clinic Operations",
  description:
    "A studio-style portfolio for custom booking, scheduling, and operations systems for multi-location clinics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
