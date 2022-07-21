import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'

import { getSortedPostsData } from '../lib/posts'
import Image from 'next/image'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className="flex justify-center py-7">
        <Image
          priority
          src="/images/profile.jpg"
          className="rounded-full mx-auto"
          height={184}
          width={184}
          alt={'Michael'}
        />
      </div>

      <section className="max-w-xs text-center mx-auto text-lg">
        <p>
          Hej, jeg er{' '}
          <Link href="/">
            <a>Michael</a>
          </Link>
          . Jeg er en frontendudvikler fra Nærum, lidt nord for København.
        </p>
      </section>
    </Layout>
  )
}
