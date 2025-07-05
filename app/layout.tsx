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
  icons: {
    icon: "https://d7gtruneqk2qegaa.public.blob.vercel-storage.com/app-icon-0422ff-OkSxa1CvyxbGXfXTW8yDtt1eBci3lk.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
