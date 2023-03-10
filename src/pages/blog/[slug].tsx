import { DefaultLayout } from '@/layout/Default'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Document } from 'outstatic'
import { getDocumentBySlug, getDocumentPaths } from 'outstatic/server'
import { ParsedUrlQuery } from 'querystring'
import ReactMarkdown from 'react-markdown'
import { NextPageWithLayout } from '../_app'
import Image from 'next/image'

interface Params extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Params

  const post = getDocumentBySlug('posts', slug, [
    'title',
    'publishedAt',
    'slug',
    'author',
    'content',
    'coverImage'
  ])

  return {
    props: {
      post
    }
  }
}

export const getStaticPaths = () => {
  return {
    paths: getDocumentPaths('posts'),
    fallback: false
  }
}

interface Props {
  post: Document
}

const BlogPost: NextPageWithLayout<Props> = ({ post }: Props) => {
  const publishedAt = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  })

  return (
    <>
      <Head>
        <title>{`IEEE NMIMS MPSTME — ${post.title}`}</title>
        <meta name="title" content="IEEE NMIMS MPSTME — Blog" />
        <meta name="description" content="Sharing a bit of my journey as a web developer." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ieeenmims.co/blog" />
        <meta property="og:title" content="IEEE NMIMS MPSTME — Blog" />
        <meta property="og:description" content="Sharing a bit of my journey as a web developer." />
        <meta property="og:image" itemProp="image" content="https://ieeenmims.co/thumbnail.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ieeenmims.co/blog" />
        <meta property="twitter:title" content="IEEE NMIMS MPSTME — Blog" />
        <meta property="twitter:description" content="Sharing a bit of my journey as a web developer." />
        <meta property="twitter:image" content="https://ieeenmims.co/thumbnail.png" />
      </Head>
      <main className="mx-auto flex w-full max-w-screen-sm flex-col gap-2 px-6 lg:px-0">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        {post.author.name && post.author.picture ? (
          <div className="mb-8 flex flex-col gap-1">
            <span>{publishedAt}</span>
            <div className="flex md:flex-row gap-3">
              <span>Written by</span>
              <Image className='rounded-xl' src={post.author.picture} alt={post.author.name} width={24} height={24} />
              <span className="font-bold">{` ${post.author.name}`}</span>
            </div>
          </div>
        ) : null}
        <section className="prose text-violet-100 prose-headings:text-white prose-strong:text-zinc-200 prose-em:transition-colors hover:prose-em:bg-violet-700 hover:prose-em:text-white lg:prose-lg">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </section>
      </main>
    </>
  )
}

BlogPost.getLayout = function getLayout(page: React.ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default BlogPost
