import type { Metadata } from 'next'
import { Space_Grotesk as SpaceGrotesk } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

const groteske = SpaceGrotesk({
  subsets: ['latin'],
  variable: '--font-groteske',
})

export const metadata: Metadata = {
  title: 'CRM Jurídico',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${groteske.variable} antialiased`}>
        <Toaster />
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  )
}
