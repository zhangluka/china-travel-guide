"use client"

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

export default function MDXContent({ source }: { source: MDXRemoteSerializeResult }) {
  return (
    <div className="prose">
      <MDXRemote {...source} />
    </div>
  )
}
