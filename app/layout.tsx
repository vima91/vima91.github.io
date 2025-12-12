import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Evram Ehab - Software Engineer & Consultant",
  description: "Software engineer specialized in .NET backend development and full-stack solutions. Expert consultant with experience in healthcare platforms, microservices architecture, and technical leadership.",
  keywords: ["Software Engineer", ".NET", "Backend Development", "Technical Consultant", "Full-Stack", "Microservices", "Azure", "React", "Next.js"],
  authors: [{ name: "Evram Ehab" }],
  openGraph: {
    title: "Evram Ehab - Software Engineer & Consultant",
    description: "Software engineer specialized in .NET backend development. Expert consultant for technical architecture and full-stack solutions.",
    url: "https://evram.me",
    siteName: "Evram Ehab",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evram Ehab - Software Engineer & Consultant",
    description: "Software engineer specialized in .NET backend development and technical consulting.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleAnalytics gaId="G-ZY5MK9ZVCT" />
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
