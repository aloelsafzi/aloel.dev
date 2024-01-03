import {
  getPostBySlug
} from '@/app/lib/mdx'

import { serialize } from 'next-mdx-remote/serialize'
import rehypePrism from 'rehype-prism-plus';
import rehypeCodeTitles from 'rehype-code-titles';

export async function GET(request, { params }) {
  let {data, content} = getPostBySlug(params.slug)
  content = await serialize(content,{ mdxOptions: {
    rehypePlugins: [
      rehypeCodeTitles,
      rehypePrism
    ]
  }}
  )

  return Response.json({...data, content})
}