import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AutoExpo - The Future of Motion is Here',
  description: 'Experience the pinnacle of automotive innovation and design. Join us for the most anticipated auto event of the year.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>{`
          html {
            scroll-behavior: smooth;
          }
        `}</style>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
