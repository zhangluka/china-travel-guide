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

export function generateStaticParams() {
  return getContentSlugs('hidden').map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const data = getContentByPath(`hidden/${slug}.mdx`)
    return {
      title: data.meta.title as string,
      description: data.meta.description as string,
      alternates: { canonical: `https://chinabound.online/hidden/${slug}/` },
    }
  } catch { return {} }
}

export default async function HiddenPage({ params }: Props) {
  const { slug } = await params
  let data
  try { data = getContentByPath(`hidden/${slug}.mdx`) } catch { notFound() }
  const { meta, content } = data
  const pageUrl = `https://chinabound.online/hidden/${slug}/`

  return (
    <div className="page-container-narrow">
      <ArticleJsonLd title={meta.title as string} description={meta.description as string} url={pageUrl} datePublished="2026-01-01" />
      <BreadcrumbJsonLd items={[{ name: 'Home', url: 'https://chinabound.online/' }, { name: 'Hidden China', url: 'https://chinabound.online/hidden/' }, { name: meta.title as string, url: pageUrl }]} />
      <nav className="breadcrumb">
        <Link href="/">Home</Link><span className="breadcrumb-sep">/</span>
        <span style={{ color: 'var(--text)' }}>{meta.title as string}</span>
      </nav>
      <article className="prose">
        <MDXRemote source={content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
      </article>
    </div>
  )
}
