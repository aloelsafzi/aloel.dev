import './globals.css'
import './globalicons.css'
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
        <div className="fixed -z-10 bottom-0 left-0 top-0 right-0">
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
