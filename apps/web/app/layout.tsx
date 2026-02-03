import './globals.css'

export const metadata = {
  title: 'AutoApply - Automatische Bewerbungen',
  description: 'Bewerbungen automatisch versenden mit Jobcenter-Nachweisen',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
