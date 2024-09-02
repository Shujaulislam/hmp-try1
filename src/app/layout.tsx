import type { Metadata } from "next";
import { Inter} from "next/font/google";
import { syne, roboto, montserrat, nunito } from "./font";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Humaya Power",
  description: "Sustainable Energy Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
   <body className={`${syne.className} ${roboto.className} ${montserrat.className} ${nunito.className} ${inter.className}`}>
    <Navbar/>
    {children}
    <Footer/>
    </body>
    </html>
  );
}
