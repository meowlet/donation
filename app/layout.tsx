import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

const googleSans = localFont({
  src: [
    {
      path: "./fonts/GoogleSans-Regular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/GoogleSans-Medium.ttf",
      weight: "500",
    },
    {
      path: "./fonts/GoogleSans-Bold.ttf",
      weight: "700",
    },
    {
      path: "./fonts/GoogleSans-Italic.ttf",
      style: "italic",
    },
    {
      path: "./fonts/GoogleSans-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/GoogleSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-google-sans",
});

export const metadata: Metadata = {
  title: "Support Google-chan",
  description: "Donate to Keep The Bot Alive!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${googleSans.variable} antialiased font-sans transition-colors duration-300`}
      >
        <div className="relative min-h-screen bg-surface dark:bg-dark-surface text-on-surface dark:text-dark-on-surface">
            <ThemeProvider>{children}</ThemeProvider>
        </div>
      </body>
    </html>
  );
}
