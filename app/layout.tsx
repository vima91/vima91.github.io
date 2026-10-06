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
  metadataBase: new URL("https://evram.me"),
  title: "Evram Ehab | Software Engineering Manager",
  description: "Engineering manager with hands-on .NET and Azure expertise. Building teams, leading platform modernization, and introducing practical AI engineering workflows.",
  keywords: ["Evram Ehab", "Software Engineering Manager", "Engineering Leadership", ".NET", "Azure", "System Architecture", "AI Engineering Workflows"],
  alternates: { canonical: "/" },
  authors: [{ name: "Evram Ehab" }],
  openGraph: {
    title: "Evram Ehab | Software Engineering Manager",
    description: "I build engineering teams that deliver. Hands-on .NET and Azure expertise, platform modernization, and practical AI workflows.",
    url: "https://evram.me",
    siteName: "Evram Ehab",
    locale: "en_US",
    type: "website",
    images: [{ url: "/social-preview.png", width: 1200, height: 630, alt: "Evram Ehab — Software Engineering Manager. I build engineering teams that deliver." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evram Ehab | Software Engineering Manager",
    description: "Engineering leadership, .NET and Azure architecture, and practical AI workflows.",
    images: ["/social-preview.png"],
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
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
