export const metadata = {
  title: 'Dwarka Suthar — Frontend Developer Portfolio',
  description: 'Passionate about building modern, responsive, and user-friendly web experiences.',
  keywords: 'Dwarka Suthar, Frontend Developer, Portfolio, React, Web Developer, UI/UX',
  authors: [{ name: 'Dwarka Suthar' }],
  openGraph: {
    title: 'Dwarka Suthar — Frontend Developer Portfolio',
    description: 'Passionate about building modern, responsive, and user-friendly web experiences.',
    type: 'website',
  },
}

import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
