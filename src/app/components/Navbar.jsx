import Link from "next/link"

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between p-3 mt-6">
        <Link href="/" className="font-semibold text-lg">{process.env.appName} <i className="text-xs bg-gray-100 p-1 px-2 rounded-full">{process.env.version}</i></Link>
        <ul className="flex gap-x-4">
          <li><Link className="hover:bg-gray-100 px-2 p-1 rounded-full" href="/">About</Link></li>
          <li><Link className="hover:bg-gray-100 px-2 p-1 rounded-full" href="/posts">Posts</Link></li>
        </ul>
      </nav>
      <hr />
    </>
  )
}


export default Navbar