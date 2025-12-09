import type { Metadata } from "next";
import { Caveat, DM_Sans } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Therapy & Wellness | Mediterranean-Inspired Healing",
  description:
    "Professional therapy services in a warm, welcoming environment inspired by Mediterranean tranquility",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${caveat.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
