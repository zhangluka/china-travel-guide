import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getContentSlugs, getContentByPath } from '@/lib/content'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { ArticleJsonLd, BreadcrumbJsonLd, FaqJsonLd } from '@/components/JsonLd'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  const slugs = getContentSlugs('news')
  return slugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const { meta } = getContentByPath(`news/${slug}.mdx`)
    return {
      title: meta.title,
      description: meta.description,
      alternates: {
        canonical: `https://chinabound.online/news/${slug}/`,
      },
    }
  } catch {
    return {}
  }
}

const faqData: Record<string, Array<{ question: string; answer: string }>> = {
  'hantavirus-cruise-outbreak-2026': [
    {
      question: 'Can I catch hantavirus on a cruise ship?',
      answer: "It's extremely unlikely. The 2026 Hondius outbreak was caused by the Andes virus in a very specific context. Standard cruise ships on conventional routes have essentially zero hantavirus risk.",
    },
    {
      question: 'Is hantavirus airborne?',
      answer: 'Not like COVID-19. Hantavirus spreads through aerosolized rodent excreta — tiny particles from dried urine or droppings disturbed into the air. It does not spread through breathing the same air as an infected person.',
    },
    {
      question: 'Do I need a hantavirus vaccine for China?',
      answer: 'There is no commercially available hantavirus vaccine for travelers. China offers a vaccine for HFRS for high-risk occupational groups, but it is not recommended for tourists.',
    },
    {
      question: 'Should I cancel my cruise because of hantavirus?',
      answer: 'No. The 2026 Hondius case was an isolated event. Norovirus, food poisoning, and respiratory infections are far more common cruise health risks — all preventable with basic hygiene.',
    },
  ],
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params
  let meta, content
  try {
    const data = getContentByPath(`news/${slug}.mdx`)
    meta = data.meta
    content = data.content
  } catch {
    notFound()
  }

  const pageUrl = `https://chinabound.online/news/${slug}/`

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
          { name: 'News', url: 'https://chinabound.online/news/' },
          { name: meta.title as string, url: pageUrl },
        ]}
      />
      {faqData[slug] && <FaqJsonLd items={faqData[slug]} />}

      <nav className="breadcrumb">
        <Link href="/">Home</Link>
        <span className="breadcrumb-sep">/</span>
        <Link href="/news/">News</Link>
        <span className="breadcrumb-sep">/</span>
        <span style={{ color: 'var(--text)' }}>{meta.title}</span>
      </nav>

      <article className="prose">
        <MDXRemote source={content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
      </article>

      <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
        <Link href="/news/" className="link-accent">
          ← Back to News
        </Link>
      </div>
    </div>
  )
}
