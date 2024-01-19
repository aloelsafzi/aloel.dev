import Link from 'next/link'
import { getAllPosts } from '@/app/lib/mdx'

import {
  Main,
  Navbar,
  CardPost,
  Icon
} from "@/app/components"
    
export default async function Posts() {
  const data = getAllPosts()

  return (
    <>
      <Navbar />
      <Main className={'mt-20 pb-10'}>
        <h1 className='font-semibold text-lg mb-3 bg-gray-100 rounded-3xl px-3 py-1 shadow-inner flex items-center'>
          <Icon name={'note_stack'} />
          <span className='ml-3'>Daftar Post</span>
        </h1> 
        <div className='flex flex-col gap-y-3 w-full'>
        {
          data.map((item, i) => {
            const {data} = item 
            return (
              <Link href={`/posts/${data.slug}`} key={`${i}`}>
                <CardPost data={data} />
              </Link>
            )
          })
        }
        </div>       
      </Main>
    </>
  )
}