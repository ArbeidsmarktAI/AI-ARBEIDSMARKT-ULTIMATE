import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Voor Werkenden | AI & Arbeidsmarkt',
  description: 'Ontdek hoe AI jouw beroep beïnvloedt en welke vaardigheden je nodig hebt om relevant te blijven. Doorzoek beroepen en krijg inzicht in AI-impact.',
}

export default function VoorWerkendenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
