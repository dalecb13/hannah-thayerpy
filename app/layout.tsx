import type { Metadata } from "next";
import { Caveat, DM_Sans } from "next/font/google";
import localFont from "next/font/local";
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

const symphony = localFont({
  src: "../public/fonts/Symphony.otf",
  variable: "--font-symphony",
  display: "swap",
});

const awesomeLathusca = localFont({
  src: "../public/fonts/AwesomeLathusca.ttf",
  variable: "--font-awesome-lathusca",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hannah Thayer, LPCC",
  description:
    "Professional therapy services in a warm, welcoming environment for anxiety, OCD, identity, transitions, and life's difficult moments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${caveat.variable} ${dmSans.variable} ${symphony.variable} ${awesomeLathusca.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
