import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits"
import { Navigation } from "@/components/navigation"
import { CountdownBanner } from "@/components/countdown-banner"
import { Footer } from "@/components/footer"
import Script from "next/script";
0
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Journey of Praise - Faith-Based Cruise Ministry",
  description:
    "Embark on a spiritual voyage where faith meets adventure. Recharge, Reconnect, Rejoice on our faith-based cruises.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/JOP_Logo_Icon.png" sizes="any" type="image/png" />
        <link rel="apple-touch-icon" href="/JOP_Logo_Icon.png" />
  </head>
             {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-SSGVJLYKK9`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-SSGVJLYKK9');
          `}
        </Script>
    
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navigation />
        <main className="min-h-screen pt-20 bg-background">
          <CountdownBanner />
          {children}
          
        </main>

        <Footer />
        <VisualEditsMessenger />
      </body>
    </html>
  )
}
