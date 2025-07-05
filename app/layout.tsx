import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Content Hub - Social Media Management Dashboard",
  description:
    "Organize and manage your social media content with ease. Perfect for marketers who want to streamline their content creation process.",
  keywords: [
    "social media management",
    "content planning",
    "AI prompts",
    "marketing dashboard",
    "content calendar",
    "social media tools",
  ],
  authors: [{ name: "Content Hub" }],
  creator: "Content Hub",
  publisher: "Content Hub",
  icons: {
    icon: "https://d7gtruneqk2qegaa.public.blob.vercel-storage.com/app-icon-0422ff-OkSxa1CvyxbGXfXTW8yDtt1eBci3lk.png",
    shortcut:
      "https://d7gtruneqk2qegaa.public.blob.vercel-storage.com/app-icon-0422ff-OkSxa1CvyxbGXfXTW8yDtt1eBci3lk.png",
    apple: "https://d7gtruneqk2qegaa.public.blob.vercel-storage.com/app-icon-0422ff-OkSxa1CvyxbGXfXTW8yDtt1eBci3lk.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://content-hub.vercel.app",
    title: "Content Hub - Social Media Management Dashboard",
    description:
      "Organize and manage your social media content with ease. Perfect for marketers who want to streamline their content creation process.",
    siteName: "Content Hub",
    images: [
      {
        url: "https://d7gtruneqk2qegaa.public.blob.vercel-storage.com/social-media-content-hub-yq2e47X4RdnG6PhMmKbi6OzHOsCYRb.jpg",
        width: 1200,
        height: 628,
        alt: "Content Hub - Social Media Management Dashboard",
        type: "image/jpeg",
      },
      {
        url: "https://d7gtruneqk2qegaa.public.blob.vercel-storage.com/social-media-content-hub-1x1-37YVsUrvgjkXuSNMYhbxWIyAjpfsbL.jpg",
        width: 1080,
        height: 1080,
        alt: "Content Hub - Social Media Management Dashboard",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Hub - Social Media Management Dashboard",
    description:
      "Organize and manage your social media content with ease. Perfect for marketers who want to streamline their content creation process.",
    creator: "@contenthub",
    images: [
      {
        url: "https://d7gtruneqk2qegaa.public.blob.vercel-storage.com/social-media-content-hub-yq2e47X4RdnG6PhMmKbi6OzHOsCYRb.jpg",
        alt: "Content Hub - Social Media Management Dashboard",
      },
    ],
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
  verification: {
    google: "your-google-verification-code",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://content-hub.vercel.app" />
        <meta name="theme-color" content="#0422FF" />
        <meta name="msapplication-TileColor" content="#0422FF" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
