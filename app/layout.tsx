import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acharya Prashant On YouTube",
  description:
    "Watch Acharya Prashant’s official YouTube videos on life, relationships, spirituality, society, and self-awareness.",
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