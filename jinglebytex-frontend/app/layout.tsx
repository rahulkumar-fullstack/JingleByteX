import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>JingleByteX</title>
        <meta name="description" content="A full-stack Christmas-themed application developed by Rahulkumar Gupta" />
        <meta name="author" content="Rahulkumar Gupta" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
