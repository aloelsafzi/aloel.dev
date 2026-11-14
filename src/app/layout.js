import './globals.css'
import localFont from 'next/font/local'
import { ThemeProvider } from '@/app/context/ThemeContext'

const myFont = localFont({
  src: [
    {
      path: './fonts/GT-Walsheim-Light-Trial-BF651b7fc714941.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/GT-Walsheim-Light-Oblique-Trial-BF651b7fc6b04a3.otf',
      weight: '300',
      style: 'italic',
    },
  ],
  variable: '--my-font',
})

export const metadata = {
  title: {
    default: `${process.env.appName} - Software Engineer`,
    template: `%s | ${process.env.appName}`,
  },
  description: 'Website pribadi Samsul Fauzi - Software Engineer dengan fokus pengembangan web dan mobile.',
  keywords: ['Samsul Fauzi', 'Aloel', 'Software Engineer', 'Frontend', 'Backend', 'React', 'Next.js'],
  authors: [{ name: 'Samsul Fauzi', url: 'https://aloel.dev' }],
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${myFont.variable} dark scroll-smooth`} suppressHydrationWarning>
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
      <body className="font-sans antialiased bg-paper dark:bg-obsidian text-ink dark:text-ink-dark selection:bg-accent/15 selection:text-accent dark:selection:bg-accent-dark/25 dark:selection:text-accent-dark min-h-screen flex flex-col transition-colors duration-200">
        <a href="#main-content" className="skip-link">
          Langsung ke konten utama
        </a>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
