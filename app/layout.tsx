import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import toast, { Toaster } from 'react-hot-toast';

// @refresh reset

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Netflix Clone by Renzo2099",
  description: "Proyecto desarrollado para agregar a mi portafolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-900`}
      >
        {children}
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </body>
    </html>
  );
}
