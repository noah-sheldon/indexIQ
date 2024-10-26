import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Faithful Connects',
  description: 'Social Media for everyone',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" />
        {/* Optionally, you can include other favicon sizes */}
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <title>Faithful Connects</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
