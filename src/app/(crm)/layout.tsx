import type { Metadata } from 'next'
import Header from '../components/header'
import { Inter } from 'next/font/google'
import Container from '../components/ui/container'

export const metadata: Metadata = {
  title: 'CRM Jurídico',
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <Container>{children}</Container>
      </body>
    </html>
  )
}
