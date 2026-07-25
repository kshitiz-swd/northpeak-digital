import "./globals.css";

export const metadata = {
  title: "NorthPeak Digital — Design and engineering studio, Tromsø",
  description:
    "NorthPeak Digital is a five-person studio in Tromsø. We design and build websites, brands, and products for companies that value the climb.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-snow font-body text-[1.0625rem] leading-[1.6] text-spruce antialiased">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          precedence="default"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700&family=Schibsted+Grotesk:wght@400;500;600&family=Spline+Sans+Mono:wght@400;500&display=swap"
        />
        {children}
      </body>
    </html>
  );
}
