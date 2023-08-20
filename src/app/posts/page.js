import { getAllPosts } from '@/app/lib/mdx'
import DateFormatter from '@/app/lib/dateFormatter';

import {
  Main,
  Navbar,
  Badge
} from "@/app/components";
    
export default async function Posts() {
  const data = getAllPosts()

  return (
    <>
      <Navbar />
      <Main className="my-10"> 
        <div className='flex flex-col gap-y-3 w-full'>
        {data.map((item, i) => {
          const { data} = item 
          return (
            <a href={`/posts/${data.slug}`} key={`${i}`}>
              <div className='p-5 border-gray-200 border rounded-3xl cursor-pointer hover:shadow-inner hover:rounded-3xl'>
                <div className='flex justify-between'>
                  <h1 className='text-lg'>{data.title}</h1>
                  <Badge text={DateFormatter(data.date)} />
                </div>
                <hr className='mb-3 mt-1' />
                <p className='text-sm antialiased font-light tracking-wide leading-relaxed indent-10'>{data.description}</p>
              </div>
            </a>
          )
        })}
        </div>       
      </Main>
    </>
  )
}