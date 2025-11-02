import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cristiano Portfolio",
  description: "A clean, single-page mobile portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

