import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getContentSlugs, getContentByPath } from '@/lib/content'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  const slugs = getContentSlugs('survival')
  return slugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const { meta } = getContentByPath(`survival/${slug}.mdx`)
    return {
      title: meta.title,
      description: meta.description,
      alternates: {
        canonical: `https://chinabound.online/survival/${slug}/`,
      },
    }
  } catch {
    return {}
  }
}

export default async function SurvivalGuidePage({ params }: Props) {
  const { slug } = await params
  let meta, content
  try {
    const data = getContentByPath(`survival/${slug}.mdx`)
    meta = data.meta
    content = data.content
  } catch {
    notFound()
  }

  const allSlugs = getContentSlugs('survival')
  const currentIndex = allSlugs.indexOf(slug)
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null

  const pageUrl = `https://chinabound.online/survival/${slug}/`

  return (
    <div className="page-container-narrow">
      <ArticleJsonLd
        title={meta.title as string}
        description={meta.description as string}
        url={pageUrl}
        datePublished={(meta.date as string) || '2026-01-01'}
        dateModified={(meta.date as string) || '2026-01-01'}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://chinabound.online/' },
          { name: 'Survival Guide', url: 'https://chinabound.online/survival/' },
          { name: meta.title as string, url: pageUrl },
        ]}
      />

      <nav className="breadcrumb">
        <Link href="/">Home</Link>
        <span className="breadcrumb-sep">/</span>
        <Link href="/survival/">Survival Guide</Link>
        <span className="breadcrumb-sep">/</span>
        <span style={{ color: 'var(--text)' }}>{meta.title}</span>
      </nav>

      <article className="prose">
        <h1>{meta.title}</h1>
        <MDXRemote source={content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
      </article>

      {/* Prev/Next navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
        {prevSlug ? (
          <Link href={`/survival/${prevSlug}/`} className="link-accent">
            ← Previous
          </Link>
        ) : <div />}
        {nextSlug ? (
          <Link href={`/survival/${nextSlug}/`} className="link-accent">
            Next →
          </Link>
        ) : <div />}
      </div>
    </div>
  )
}
