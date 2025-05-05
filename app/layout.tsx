import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import "./globals.css"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mudit Rajput - Full Stack Developer",
  description:
    "Portfolio website of Mudit Rajput, a Full Stack Developer specializing in React.js, Next.js, Node.js, and MongoDB.",
  keywords:
    "Mudit Rajput, Full Stack Developer, React.js, Next.js, Node.js, MongoDB, Web Developer, Frontend Developer, Backend Developer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

