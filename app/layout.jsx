import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export const metadata = {
  title: 'Trade Licence Solutions NSW | Expert Licensing Support',
  description: 'Get help with NSW trade and builder licence applications. Fast, accurate and stress-free with 98% approval rate. Book a free consultation today.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}