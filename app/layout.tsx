import type { Metadata } from 'next'
import { Inter, Bricolage_Grotesque } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const bricolageGrotesque = Bricolage_Grotesque({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bricolage'
})

export const metadata: Metadata = {
  title: 'Nick Piovano - Product Manager',
  description: 'Product Innovator & Leader in Sports - Building digital tools that connect fans with the games they love',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolageGrotesque.variable}`}>
      <body className="font-inter">{children}</body>
    </html>
  )
}
