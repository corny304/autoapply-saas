import './globals.css'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'

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
      <body>
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
