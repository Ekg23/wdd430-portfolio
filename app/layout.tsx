import "./globals.css"
import Header from '@/components/Header'
import Footer from "@/components/Footer"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Geoffrey's Portfolio",
  description:
    "A portfolio showcasing my projects, skills, and journey as a developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}



