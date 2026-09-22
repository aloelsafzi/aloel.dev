import './globals.css'
import './globalicons.css'
import localFont from '@next/font/local'
import Image from "next/image"
import { ThemeProvider } from '@/app/context/ThemeContext'

const myFont = localFont({ 
  src: './fonts/GT-Walsheim-Light-Trial-BF651b7fc714941.otf',
  variable: '--my-font'
})

export const metadata = {
  title: {
    default: `${process.env.appName} - Software Engineer`,
    template: `%s | ${process.env.appName}`
  },
  description: 'Website pribadi Samsul Fauzi - Software Engineer dengan fokus pengembangan web dan mobile modern.',
  keywords: ['Samsul Fauzi', 'Aloel', 'Software Engineer', 'Frontend', 'Backend', 'React', 'Next.js'],
  authors: [{ name: 'Samsul Fauzi', url: 'https://aloel.dev' }],
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  if (saved === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${myFont.className} antialiased bg-[#fafafa] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-blue-500/15 selection:text-blue-700 dark:selection:bg-blue-500/30 dark:selection:text-blue-300 min-h-screen flex flex-col transition-colors duration-200`}
      >
        <ThemeProvider>
          {/* Subtle background line pattern */}
          <div className="fixed -z-10 inset-0 pointer-events-none overflow-hidden opacity-40 dark:opacity-10 transition-opacity">
            <Image
              src="/bg-line.svg"
              alt=""
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Ambient subtle light glow */}
          <div className="fixed -z-10 -top-40 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[500px] bg-gradient-to-b from-blue-500/5 dark:from-blue-600/15 via-indigo-500/5 dark:via-indigo-600/10 to-transparent blur-3xl pointer-events-none" />

          <div className="flex flex-col min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
