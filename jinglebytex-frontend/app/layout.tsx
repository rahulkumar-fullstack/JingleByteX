import type { Metadata } from "next";

import "./globals.css";
import "../fontawesome-config";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      <body className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
