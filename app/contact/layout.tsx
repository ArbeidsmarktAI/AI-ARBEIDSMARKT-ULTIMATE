import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | AI & Arbeidsmarkt',
  description: 'Heb je vragen over AI en de arbeidsmarkt? Neem contact met ons op. We helpen je graag verder met advies en informatie.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
