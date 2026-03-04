import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/ui/Navbar"; // Navbar eka import kala

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  // FOUT නවත්වන්න - text invisible වෙනවා font load වෙනකන්
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Lumière | Modern Salon",
  description: "Where Expert Care Meets Luxurious Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <Navbar /> {/* Navbar eka body eka athulata damma */}
        <main className="min-h-screen pt-20"> {/* pt-20 damme Navbar eken content eka waha gena inna eka nawaththanna */}
          {children}
        </main>
      </body>
    </html>
  );
}