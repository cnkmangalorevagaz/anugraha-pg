import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mangalorehostel.com"),
  title: "Anugraha PG for Girls | Premium Stay in Mangalore",
  description:
    "✨ Safe & Comfortable Girls PG in Mangalore. Spacious Rooms • Homely Food • Wi-Fi • Housekeeping • 24/7 Security. Your Home Away From Home.",

  openGraph: {
    title: "Anugraha PG for Girls 🏡",
    description:
      "Safety and Comfort, Crafted for Her",
    images: [
      {
        url: "https://mangalorehostel.com/ogimage-v2.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
