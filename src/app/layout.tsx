import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nextjs 13 | OpenAI Dall-e 2 | FaztCode',
  description: 'Nextjs 13 | OpenAI Dall-e 2 | FaztCode',
  keywords: 'nextjs, openai, dall-e, faztcode'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
