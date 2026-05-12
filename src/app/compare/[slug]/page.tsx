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
  return getContentSlugs('compare').map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const data = getContentByPath(`compare/${slug}.mdx`)
    return {
      title: data.meta.title as string,
      description: data.meta.description as string,
      alternates: { canonical: `https://chinabound.online/compare/${slug}/` },
    }
  } catch { return {} }
}

export default async function ComparePage({ params }: Props) {
  const { slug } = await params
  let data
  try { data = getContentByPath(`compare/${slug}.mdx`) } catch { notFound() }
  const { meta, content } = data
  const pageUrl = `https://chinabound.online/compare/${slug}/`

  return (
    <div className="page-container-narrow">
      <ArticleJsonLd title={meta.title as string} description={meta.description as string} url={pageUrl} datePublished="2026-01-01" />
      <BreadcrumbJsonLd items={[{ name: 'Home', url: 'https://chinabound.online/' }, { name: 'Compare', url: 'https://chinabound.online/compare/' }, { name: meta.title as string, url: pageUrl }]} />
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
