import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getContentByPath, getContentSlugs } from '@/lib/content'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'

interface Props {
  params: Promise<{ slug: string }>
}

function findContent(slug: string, city: string): { meta: Record<string, unknown>; content: string; category: string } | null {
  const dirs = ['attractions', 'food', '']
  for (const dir of dirs) {
    const filePath = dir
      ? `cities/${city}/${dir}/${slug}.mdx`
      : `cities/${city}/${slug}.mdx`
    try {
      const data = getContentByPath(filePath)
      return { ...data, category: dir || 'general' }
    } catch {
      continue
    }
  }
  return null
}

export async function generateStaticParams() {
  const city = 'shanghai'
  const attractions = getContentSlugs(`cities/${city}/attractions`)
  const food = getContentSlugs(`cities/${city}/food`)
  const base = getContentSlugs(`cities/${city}`).filter(s => s !== 'index')

  return [...attractions, ...food, ...base].map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const data = findContent(slug, 'shanghai')
  if (!data) return {}
  return {
    title: data.meta.title as string,
    description: data.meta.description as string,
    alternates: {
      canonical: `https://chinabound.online/city/shanghai/${slug}/`,
    },
  }
}

export default async function CityContentPage({ params }: Props) {
  const { slug } = await params
  const data = findContent(slug, 'shanghai')
  if (!data) notFound()

  const { meta, content, category } = data
  const pageUrl = `https://chinabound.online/city/shanghai/${slug}/`

  return (
    <div className="page-container-narrow">
      <ArticleJsonLd
        title={meta.title as string}
        description={meta.description as string}
        url={pageUrl}
        datePublished={(meta.date as string) || '2026-01-01'}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://chinabound.online/' },
          { name: 'Cities', url: 'https://chinabound.online/city/' },
          { name: 'Shanghai', url: 'https://chinabound.online/city/shanghai/' },
          { name: meta.title as string, url: pageUrl },
        ]}
      />

      <nav className="breadcrumb">
        <Link href="/">Home</Link>
        <span className="breadcrumb-sep">/</span>
        <Link href="/city/">Cities</Link>
        <span className="breadcrumb-sep">/</span>
        <Link href="/city/shanghai/">Shanghai</Link>
        <span className="breadcrumb-sep">/</span>
        <span style={{ color: 'var(--text)' }}>{meta.title as string}</span>
      </nav>

      <article className="prose">
        <MDXRemote source={content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
      </article>

      <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
        <Link href="/city/shanghai/" className="link-accent">
          ← Back to Shanghai Guide
        </Link>
      </div>
    </div>
  )
}
