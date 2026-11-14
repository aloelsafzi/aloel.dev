import { getPostBySlug } from '@/app/lib/mdx'
import { serialize } from 'next-mdx-remote/serialize'
import rehypePrism from 'rehype-prism-plus'
import rehypeCodeTitles from 'rehype-code-titles'

export async function GET(request, { params }) {
  const post = getPostBySlug(params.slug)
  if (!post) {
    return Response.json({ error: 'Tulisan tidak ditemukan' }, { status: 404 })
  }

  const content = await serialize(post.content, {
    mdxOptions: {
      rehypePlugins: [rehypeCodeTitles, rehypePrism],
    },
  })

  return Response.json({ ...post.data, content })
}
