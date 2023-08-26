import Link from 'next/link'
import { getAllPosts } from '@/app/lib/mdx'
import DateFormatter from '@/app/lib/dateFormatter'

import {
  Main,
  Navbar,
  Badge
} from "@/app/components"
    
export default async function Posts() {
  const data = getAllPosts()

  return (
    <>
      <Navbar />
      <Main className="my-10">
        <h1 className='font-semibold text-lg mb-3 bg-gray-100 rounded-3xl px-3 py-1 shadow-inner'>🗒️ Daftar Post</h1> 
        <div className='flex flex-col gap-y-3 w-full'>
        {data.map((item, i) => {
          const { data} = item 
          return (
            <Link href={`/posts/${data.slug}`} key={`${i}`}>
              <div className='p-5 border-gray-200 border rounded-3xl cursor-pointer hover:shadow-inner hover:rounded-3xl'>
                <div className='flex justify-between'>
                  <h1 className='text-lg'>{data.title}</h1>
                  <Badge text={DateFormatter(data.date)} />
                </div>
                <hr className='mb-3 mt-1' />
                <p className='text-sm antialiased font-light tracking-wide leading-relaxed indent-10'>{data.description}</p>
              </div>
            </Link>
          )
        })}
        </div>       
      </Main>
    </>
  )
}