import Image from "next/image"

const Main = ({ children, className }) => {
  return (
    <>
      <main className={`${className} mx-3`}>
        <div className="absolute -z-10 h-screen w-11/12">
          <Image
            src="/bg-line.svg"
            alt="background image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        {children}
      </main>
    </>
  )
}

export default Main