import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Over Ons | AI & Arbeidsmarkt',
  description: 'Ontdek hoe AI verschillende sectoren transformeert. Diepgaande analyses van de impact van kunstmatige intelligentie op de Nederlandse arbeidsmarkt.',
}

export default function OverOnsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
