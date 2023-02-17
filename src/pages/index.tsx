import { Cards } from '@/components/Cards'
import { Heading } from '@/components/Heading'
import { Introduction } from '@/components/Introduction'
import { DefaultLayout } from '@/layout/Default'
import Head from 'next/head'
import { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>IEEE NMIMS — Home</title>
        <meta name="title" content="IEEE NMIMS — Student Branch @IEEE" />
        <meta name="description" content="We are a IEEE's Student Branch, and we're building the future." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ieeenmims.co/" />
        <meta property="og:title" content="IEEE NMIMS — Student Branch @IEEE" />
        <meta property="og:description" content="We are a IEEE's Student Branch, and we're building the future." />
        <meta property="og:image" itemProp="image" content="https://ieeenmims.co/thumbnail.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ieeenmims.co/" />
        <meta property="twitter:title" content="IEEE NMIMS — Student Branch @IEEE" />
        <meta
          property="twitter:description"
          content="We are a IEEE's Student Branch, and we're building the future."
        />
        <meta property="twitter:image" content="https://ieeenmims.co/thumbnail.png" />

        {/* add theme color */}
        <meta name="theme-color" content="#000000" />
      </Head>
      <main className="mx-auto flex h-full w-full max-w-screen-sm flex-col gap-5 px-6 lg:px-0">
        <Heading />
        <Introduction />
        <Cards />
      </main>
    </>
  )
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
