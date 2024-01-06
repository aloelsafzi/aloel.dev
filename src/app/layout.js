import './globals.css'
import { Inter } from 'next/font/google'
import Image from "next/image";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: `${process.env.appName}`,
  description: 'Personal Website - Aloel.Dev',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${inter.className}`}>
        <div className="absolute -z-10 h-full w-full">
          <Image
            src="/bg-line.svg"
            alt="background image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className='container mx-auto'>
          {children}
        </div>
      </body>
    </html>
  )
}
