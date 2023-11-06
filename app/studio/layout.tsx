import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { METADATA } from '../utils/constants'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: METADATA.MAIN_TITLE,
  description: METADATA.MAIN_DESCRIPTION,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
