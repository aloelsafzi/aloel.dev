import Link from 'next/link'

const ButtonLink = ({to, className, children}) => {
  return (
    <Link href={to} className={`${className} bg-gray-100 p-1 px-3 flex w-fit gap-x-3 rounded-3xl shadow-inner hover:bg-gray-200`}>
      {children}
    </Link>
  )
}

export default ButtonLink