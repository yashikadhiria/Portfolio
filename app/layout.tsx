import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Manrope } from "next/font/google"
import { Dancing_Script } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

// Font configurations
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const handwriting = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-handwriting',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "Yashika Dhiria - Product Manager Portfolio",
    template: "%s | Yashika Dhiria"
  },
  description: "Product Enthusiast building bridges between Tech and Vision with full-product insight. Explore my projects, case studies, and product management journey.",
  keywords: [
    "Yashika Dhiria",
    "Product Manager",
    "Product Management",
    "Product Enthusiast",
    "Technical Product Manager",
    "Product Strategy",
    "User Experience",
    "Product Development",
    "Agile",
    "Scrum",
    "Product Roadmap",
    "Case Studies",
    "PRD",
    "Product Requirements Document",
    "Accenture",
    "Software Development",
    "Product Analytics",
    "AI Tools",
    "Product Portfolio"
  ],
  authors: [{ name: "Yashika Dhiria" }],
  creator: "Yashika Dhiria",
  publisher: "Yashika Dhiria",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://yashikadhiria.github.io/Portfolio"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/Portfolio/favicon.svg", type: "image/svg+xml" },
      { url: "/Portfolio/favicon.ico", sizes: "32x32", type: "image/x-icon" }
    ],
    apple: [
      { url: "/Portfolio/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
  },
  themeColor: "#000000",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yashikadhiria.github.io/Portfolio",
    title: "Yashika Dhiria - Product Manager Portfolio",
    description: "Product Enthusiast building bridges between Tech and Vision with full-product insight. Explore my projects, case studies, and product management journey.",
    siteName: "Yashika Dhiria Portfolio",
    images: [
      {
        url: "/Portfolio/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yashika Dhiria - Product Manager Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yashika Dhiria - Product Manager Portfolio",
    description: "Product Enthusiast building bridges between Tech and Vision with full-product insight.",
    images: ["/Portfolio/og-image.jpg"],
    creator: "@yashikadhiria",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // TODO: Uncomment and add your Google Search Console verification code before deploying
  // verification: {
  //   google: "your-google-verification-code",
  // },
  category: "technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${manrope.variable} ${handwriting.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <Suspense fallback={null}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
