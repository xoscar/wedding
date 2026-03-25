import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Poppins,
  Preahvihear,
  Reenie_Beanie,
} from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const preahvihear = Preahvihear({
  variable: "--font-preahvihear",
  subsets: ["latin"],
  weight: "400",
});

const reenieBeanie = Reenie_Beanie({
  variable: "--font-reenie-beanie",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Oscar & Katy",
  description: "La boda de Oscar y Katy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${poppins.variable} ${preahvihear.variable} ${reenieBeanie.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
