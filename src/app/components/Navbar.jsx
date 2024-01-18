'use client'

import Link from "next/link"
import { Icon } from "@/app/components"
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className={'hover:bg-gray-100 flex justify-center p-1 rounded-full'}>
          <Icon name={'apps'} />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/tasbih"
                  className={`${active ? 'bg-gray-100 text-black' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <Icon name={'play_circle'} />
                  <span className="ml-2">Tasbih App</span>
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

const Navbar = () => {
  return (
    <>
      <div className=" bg-white fixed top-0 left-0 right-0 z-10 shadow-sm">
        <nav className="flex justify-between p-3 items-center container mx-auto">
          <Link href="/" className="font-semibold text-lg">{process.env.appName} <i className="text-xs bg-gray-100 p-1 px-2 rounded-full">{process.env.version}</i></Link>
          <ul className="flex gap-x-4 items-center">
            <li><Link className="hover:bg-gray-100 px-2 p-1 rounded-full" href="/">About</Link></li>
            <li><Link className="hover:bg-gray-100 px-2 p-1 rounded-full" href="/posts">Posts</Link></li>
            <li><Example /></li>
          </ul>
        </nav>
        <hr />
      </div>
    </>
  )
}


export default Navbar