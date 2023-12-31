import './globals.css'
import localFont from '@next/font/local'
import Image from "next/image";

const myFont = localFont({ 
  src: './fonts/GT-Walsheim-Light-Trial-BF651b7fc714941.otf',
  variable: '--my-font'
})

export const metadata = {
  title: `${process.env.appName}`,
  description: 'Personal Website - Aloel.Dev',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${myFont.className}`}>
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
