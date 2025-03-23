import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"), // Ganti dengan URL production Anda
  title: "Welcome to Auqi Portfolio",
  description: "It is a Portfolio website",
  openGraph: {
    title: "Welcome to Auqi Portfolio",
    description: "It is a Portfolio website",
    images: "/opengraph-image.jpg", // Path relatif ke gambar Open Graph
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome to Auqi Portfolio",
    description: "It is a Portfolio website",
    images: "/opengraph-image.jpg", // Path relatif ke gambar Twitter Card
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
