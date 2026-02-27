import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Digital Marketing Agency in Pune | Top Digital Marketing Company | BizOn Digital",
  description: "BizOn Digital is a leading digital marketing agency in Pune offering SEO, PPC, social media, content, and consulting services. Best digital marketing company in Pune with proven results.",
  keywords: "digital marketing agency in Pune, best digital marketing company in Pune, top digital marketing agency Pune, digital marketing services in Pune, digital marketing consultants in Pune",
  viewport: "width=device-width, initial-scale=1",
  authors: [{ name: "BizOn Digital", url: "https://bizondigital.com" }],
  openGraph: {
    title: "Digital Marketing Agency Pune | BizOn Digital",
    description: "Leading digital marketing agency in Pune delivering SEO, PPC, social media and content marketing",
    url: "https://bizondigital.com",
    siteName: "BizOn Digital",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#F97316" />
        <link rel="icon" href="/favicon.ico" />
        {/* Prevent MetaMask and other extension errors */}
        <script>
          {`if (typeof window !== 'undefined' && !window.ethereum) { window.ethereum = undefined; }`}
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
