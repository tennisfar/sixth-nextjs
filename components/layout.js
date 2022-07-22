import Head from 'next/head'
import Link from 'next/link'
import Main from './Main/Main'

export const siteTitle = 'Sixth, frontend udvikler.'

export default function Layout({ children, home }) {
  return (
    <div className="flex flex-col h-full">
      <Head>
        <link href="/favicon-16x16.png" rel="icon" type="image/png" />
        <meta name="description" content="Frontendudvikler" />
      </Head>

      <Main>{children}</Main>

      <footer className="h-40 bg-[#F8E81C] p-5 text-center relative bg-[url('/footer-bg.jpg')] flex justify-center">
        <p className="text-xs text-[#B4A812] absolute bottom-5 tracking-widest">
          SIXTH.DK (C) 2022 &#8226; CVR 38418998
        </p>
      </footer>
    </div>
  )
}
