"use client"

import useSWR from 'swr'
import { MDXRemote } from 'next-mdx-remote'

import {
  Main,
  Navbar,
  Badge,
  ButtonLink
} from "@/app/components";

const fetcher = (...args) => fetch(...args).then((res) => res.json())
    
export default function Post({params : {slug}}) {

  const { data, error } = useSWR(`/api/posts/${slug}`, fetcher)

  if (error) return <div className='flex justify-center mt-10'><Badge text="Failed to load" /></div>
  if (!data) return <div className='flex justify-center mt-10'><Badge text="Loading..." /></div>

  return (
    <>
      <Navbar />
      <Main className={'mt-20'}> 
        <div className='flex md:justify-between justify-center mb-3 items-start gap-x-10 gap-y-10 flex-wrap'>
          <div className='flex justify-between items-center w-full md:hidden'>
            <ButtonLink to="/posts"> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.0} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </ButtonLink>
            <Badge text={data.date} />
          </div>
          
          <ButtonLink to="/posts" className={'hidden md:block'}> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.0} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </ButtonLink>
          <h1 className='text-xl text-center tracking-wide leading-tight'>{data.title}</h1>
          <Badge text={data.date} className={'hidden md:block'} />
        </div>
        <hr/>
        <div className='my-6'>
          <MDXRemote {...data.content}/>
        </div>
      </Main>
    </>
  )
}