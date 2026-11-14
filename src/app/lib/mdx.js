import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), 'src/app/data')
const SLUG_PATTERN = /^[a-zA-Z0-9_-]+$/

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.mdx'))
}

export function getPostBySlug(slug) {
  if (!slug || typeof slug !== 'string') return null
  const realSlug = slug.replace(/\.mdx$/, '')
  if (!SLUG_PATTERN.test(realSlug)) return null

  const fullPath = join(postsDirectory, `${realSlug}.mdx`)
  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  return matter(fileContents)
}

export function getAllPosts() {
  const slugs = getPostSlugs()
  return slugs
    .map((slug) => getPostBySlug(slug))
    .filter(Boolean)
    .sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
}
