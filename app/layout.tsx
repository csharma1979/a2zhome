"use client";


import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/style.scss"
import Header from "../src/components/commonComps/Header";
import Footer from "../src/components/commonComps/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import { usePathname } from "next/navigation";
import { HelmetProvider } from "react-helmet-async";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();
  const isHomepage = pathname === "/" ;
  const isAdminRoute = pathname.includes("/admin"); 
  
  return (
    <HelmetProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {!isAdminRoute &&  <Header />}
        {/* <Header /> */}
        <main className="">
            {children}
          
          </main>
          {!isAdminRoute && <Footer />}
      </body>
    </html>
    </HelmetProvider>
  );
}
