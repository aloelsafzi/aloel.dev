import mdx2Html from '@/app/lib/mdx2html'
import markdownStyles from '@/app/styles/mdx-style.module.css'
import DateFormatter from '@/app/lib/dateFormatter';

import {
  getPostBySlug
} from '@/app/lib/mdx'

import {
  Main,
  Navbar,
  Badge,
  ButtonLink
} from "@/app/components";
    
export default async function Post({params}) {
  const {slug} = params
  const {data, content} = getPostBySlug(slug)
  const contentHtml = await mdx2Html(content)

  return (
    <>
      <Navbar />
      <Main> 
        <div className='flex md:justify-between justify-center mt-10 mb-3 items-start gap-x-10 gap-y-10 flex-wrap'>
          <ButtonLink to="/posts"> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.0} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </ButtonLink>
          <h1 className='text-xl text-center tracking-wide leading-tight'>{data.title}</h1>
          <Badge text={DateFormatter(data.date)} />
        </div>
        <hr/>
        <div className='my-6'>
          <div 
            className={`${markdownStyles["markdown-body"]}`}
            dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
      </Main>
    </>
  )
}