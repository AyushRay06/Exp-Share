import type { Metadata } from "next"

import "./globals.css"

export const metadata: Metadata = {
  title: "Experience-share",
  description: "Share hat you know about",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
