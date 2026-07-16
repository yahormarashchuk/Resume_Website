import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const satoshi = localFont({
  variable: "--font-satoshi",
  src: [{ path: "./fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" }],
});

export const metadata: Metadata = {
  title: "Sawad",
  description: "A sleek and modern portfolio template designed for creatives",
  icons: { icon: "/seo/favicon.png" },
  openGraph: {
    title: "Sawad",
    description: "A sleek and modern portfolio template designed for creatives",
    images: ["/seo/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${satoshi.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
