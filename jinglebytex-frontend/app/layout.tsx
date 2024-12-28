import type { Metadata } from "next";

import "./globals.css";
import "../fontawesome-config";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "JingleByteX",
  description: "A full-stack Christmas-themed application developed by Rahulkumar Gupta",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
