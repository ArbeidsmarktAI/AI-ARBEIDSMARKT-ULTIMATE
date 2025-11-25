import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Voor Studenten | AI & Arbeidsmarkt',
  description: 'Bereid je voor op een toekomst waarin AI een centrale rol speelt. Ontdek welke opleidingen en vaardigheden belangrijk zijn voor jouw carrière.',
}

export default function VoorStudentenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
