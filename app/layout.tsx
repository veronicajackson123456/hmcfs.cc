import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: 'MCOL LTD | Comprehensive Business Support Services',
  description: 'Your trusted partner in growth, efficiency, and success. We provide administrative support, financial management, strategic consultancy, and staffing solutions for businesses of all sizes.',
  keywords: 'business support, administrative services, consultancy, staffing, HR, financial management, operations',
  openGraph: {
    title: 'MCOL LTD | Comprehensive Business Support Services',
    description: 'Your trusted partner in growth, efficiency, and success.',
    type: 'website',
  },

}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0066CC',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  )
}
