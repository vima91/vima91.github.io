import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
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
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZY5MK9ZVCT"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZY5MK9ZVCT');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
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
