import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Abd-El-Raheem Elhlwany | Frontend Developer",
  description:
    "Professional portfolio of Abd-El-Raheem Elhlwany, a Frontend Developer specializing in React and Next.js",
  keywords: "frontend developer, react, next.js, web development, portfolio, Abd-El-Raheem Elhlwany",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Toaster/>
        </ThemeProvider>
      </body>
    </html>
  )
}
