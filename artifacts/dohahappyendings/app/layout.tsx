import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "DohaHappyEndings — Where Desire Meets Discretion",
  description: "Doha's most exclusive luxury connection platform. Verified pleasure givers, absolute privacy, and unforgettable experiences.",
  keywords: ["Doha", "connections", "luxury", "discreet", "premium", "exclusive"],
  openGraph: {
    title: "DohaHappyEndings",
    description: "Where Desire Meets Discretion",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen antialiased" style={{ background: "#080208", color: "#F0E4DC" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
