import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content')

export interface ContentMeta {
  slug: string
  title: string
  description: string
  category?: string
  city?: string
  icon?: string
  order?: number
  [key: string]: unknown
}

export function getContentByPath(filePath: string): { meta: ContentMeta; content: string } {
  const fullPath = path.join(CONTENT_DIR, filePath)
  const raw = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(raw)
  return { meta: data as ContentMeta, content }
}

export function getContentSlugs(dir: string): string[] {
  const fullPath = path.join(CONTENT_DIR, dir)
  if (!fs.existsSync(fullPath)) return []
  return fs.readdirSync(fullPath)
    .filter(f => f.endsWith('.mdx'))
    .map(f => f.replace('.mdx', ''))
}

export function getAllContentInDir(dir: string): Array<{ meta: ContentMeta; content: string; slug: string }> {
  const fullPath = path.join(CONTENT_DIR, dir)
  if (!fs.existsSync(fullPath)) return []
  const files = fs.readdirSync(fullPath).filter(f => f.endsWith('.mdx'))
  return files.map(f => {
    const slug = f.replace('.mdx', '')
    const raw = fs.readFileSync(path.join(fullPath, f), 'utf8')
    const { data, content } = matter(raw)
    return { meta: { ...data, slug } as ContentMeta, content, slug }
  }).sort((a, b) => (a.meta.order ?? 99) - (b.meta.order ?? 99))
}

export function getCityContent(city: string) {
  const base = `cities/${city}`
  const overview = getContentByPath(`${base}/index.mdx`)
  const attractions = getAllContentInDir(`${base}/attractions`)
  const food = getAllContentInDir(`${base}/food`)
  const transport = getAllContentInDir(`${base}`)
    .filter(c => c.slug.startsWith('getting') || c.slug.startsWith('where') || c.slug === 'itinerary-3-days')
  return { overview, attractions, food, transport }
}

export function getSurvivalGuides() {
  return getAllContentInDir('survival')
}
