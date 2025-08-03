import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Cairo, Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo" })

export const metadata: Metadata = {
  title: "Abd-El-Raheem Elhlwany | website Developer | عبد الرحيم الحلواني",
  description:
    "Professional portfolio of Abd-El-Raheem Elhlwany, a Frontend Developer specializing in React and Next.js | الموقع الشخصي لعبد الرحيم الحلواني، مطور واجهات أمامية متخصص في React و Next.js",
  keywords:
    "frontend developer, react, next.js, web development, portfolio, Elhlwany, El_hlwany, Abd-El-Raheem Elhlwany, الحلواني , مطور واجهات أمامية, تطوير مواقع",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-WSTW7KPXBH"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WSTW7KPXBH');
        `}
        </Script>
      </head>
      <body className={`${inter.className} ${cairo.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <Navbar />
              {children}
            <Toaster/>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
