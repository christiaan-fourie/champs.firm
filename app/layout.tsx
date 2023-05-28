import './globals.css'
import { Inter } from 'next/font/google'

import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Champs Firm',
  description: 'a Consultancy Firm for your business, in the african domain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-fill content-between`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
