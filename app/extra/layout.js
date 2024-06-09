import React from 'react';
import { Inter } from 'next/font/google';
import './styles.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Page</title>
      </head>
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
