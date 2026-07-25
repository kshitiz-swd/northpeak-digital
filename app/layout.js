import { Bricolage_Grotesque, Schibsted_Grotesk, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-bricolage",
  display: "swap",
});

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-schibsted",
  display: "swap",
});

const spline = Spline_Sans_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-spline",
  display: "swap",
});

export const metadata = {
  title: "NorthPeak Digital — Design and engineering studio, Tromsø",
  description:
    "NorthPeak Digital is a five-person studio in Tromsø. We design and build websites, brands, and products for companies that value the climb.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${schibsted.variable} ${spline.variable}`}>
      <body className="bg-snow font-body text-[1.0625rem] leading-[1.6] text-spruce antialiased">
        {children}
      </body>
    </html>
  );
}