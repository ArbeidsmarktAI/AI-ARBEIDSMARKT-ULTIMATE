import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AI & Arbeidsmarkt | De Invloed van AI op de Nederlandse Arbeidsmarkt',
  description: 'Ontdek hoe kunstmatige intelligentie de Nederlandse arbeidsmarkt transformeert. Van praktische tools tot diepgaande analyses voor werkenden en studenten.',
  keywords: ['AI', 'arbeidsmarkt', 'kunstmatige intelligentie', 'Nederland', 'toekomst van werk', 'automatisering'],
  authors: [{ name: 'AI & Arbeidsmarkt' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3b82f6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
