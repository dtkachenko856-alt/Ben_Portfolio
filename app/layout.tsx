import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alex Chen | Android & AI Developer',
  description: 'Portfolio of Alex Chen - Expert Android Developer & AI Engineer specializing in machine learning, mobile applications, and innovative tech solutions.',
  keywords: ['Android Developer', 'AI Engineer', 'Machine Learning', 'Mobile Apps', 'Portfolio'],
  authors: [{ name: 'Alex Chen' }],
  openGraph: {
    title: 'Alex Chen | Android & AI Developer',
    description: 'Expert Android Developer & AI Engineer Portfolio',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
