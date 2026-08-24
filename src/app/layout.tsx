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
  metadataBase: new URL("https://yahor-marashchuk.vercel.app"),
  title: "Yahor Marashchuk — Backend .NET Developer",
  description:
    "Backend .NET Developer building multi-tenant SaaS with C#, ASP.NET Core, EF Core, PostgreSQL, Redis, Docker, and Azure.",
  icons: { icon: "/seo/favicon.png" },
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Yahor Marashchuk — Backend .NET Developer",
    description:
      "Backend .NET Developer building multi-tenant SaaS with C#, ASP.NET Core, EF Core, PostgreSQL, Redis, Docker, and Azure.",
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
