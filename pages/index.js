import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import BrowserFrame from '../components/BrowserFrame'
import Highlight from '../components/Highlight'
import Icon from '../components/Icon'

const description =
  'Sixth builds focused WooCommerce extensions that fix the problems merchants keep running into. Made in Denmark.'

// The site's global link styling (yellow underline, no wrapping) is for inline text links only.
const plainLink = 'before:hidden whitespace-normal'

const adressecheckShot = {
  src: '/images/adressecheck/checkout-suggestions.png',
  width: 1032,
  height: 740,
  alt: 'AdresseCheck suggesting Danish addresses in a WooCommerce checkout',
}

const principles = [
  {
    icon: 'target',
    title: 'Start with real complaints',
    text: 'We read what merchants say about existing extensions, then build the version that fixes what keeps going wrong.',
  },
  {
    icon: 'blocks',
    title: 'Built for modern WooCommerce',
    text: 'Cart & Checkout blocks and High-Performance Order Storage from day one, not bolted on years later.',
  },
  {
    icon: 'shield',
    title: 'Tested like it matters',
    text: 'Unit, integration and end-to-end tests run on every change, so problems show up in our build, not your store.',
  },
]

function SectionHeading({ eyebrow, title, intro }) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-12">
      <p className="text-sm font-medium uppercase tracking-widest text-black/50 mb-3">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight">{title}</h2>
      {intro && <p className="mt-4 text-lg text-black/60">{intro}</p>}
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-full bg-[#fbfbf8] text-[#2f3234]">
      <Head>
        <title>Sixth – WooCommerce extensions made in Denmark</title>
        <meta name="description" content={description} />
        <meta property="og:title" content="Sixth – WooCommerce extensions made in Denmark" />
        <meta property="og:description" content={description} />
        <link href="/sixth-logo.svg" rel="icon" type="image/svg+xml" />
        <link href="/favicon-16x16.png" rel="icon" type="image/png" />
      </Head>

      <header className="sticky top-0 z-20 bg-[#fbfbf8]/80 backdrop-blur border-b border-black/5">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className={`${plainLink} flex items-center gap-2 text-xl tracking-tight`}>
            <Image src="/sixth-logo.svg" width={32} height={32} alt="" />
            Sixth
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#products" className={`${plainLink} font-normal text-black/60 hover:text-black`}>
              Products
            </a>
            <a href="#approach" className={`${plainLink} font-normal text-black/60 hover:text-black`}>
              Approach
            </a>
            <a href="#about" className={`${plainLink} font-normal text-black/60 hover:text-black`}>
              About
            </a>
          </div>
          <Link href="/adressecheck">
            <a
              className={`${plainLink} text-xs md:text-sm rounded-full bg-[#2f3234] text-white px-4 py-2 hover:bg-black transition`}
            >
              Meet AdresseCheck
            </a>
          </Link>
        </nav>
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[48rem] h-[30rem] rounded-full bg-[#F8E81C]/40 blur-3xl" />
          <div className="relative max-w-4xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32 text-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-black/10 px-3 py-1 text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-[#28c840]" />
              WooCommerce extensions, made in Denmark
            </p>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.05]">
              Small extensions that <Highlight>fix real problems.</Highlight>
            </h1>
            <p className="mt-8 text-xl text-black/60 max-w-2xl mx-auto">
              Sixth builds focused WooCommerce extensions for the gaps merchants keep running into. Each one does one
              job, and does it properly.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#products"
                className={`${plainLink} rounded-full bg-[#2f3234] text-white px-6 py-3 hover:bg-black transition`}
              >
                See our extensions
              </a>
              <a
                href="#about"
                className={`${plainLink} rounded-full bg-white ring-1 ring-black/10 px-6 py-3 hover:ring-black/30 transition`}
              >
                About Sixth
              </a>
            </div>
          </div>
        </section>

        <section id="products" className="max-w-6xl mx-auto px-6 pb-24 scroll-mt-16">
          <SectionHeading eyebrow="Products" title="Our extensions" />

          <article className="rounded-[2rem] bg-white ring-1 ring-black/5 shadow-sm overflow-hidden grid lg:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex w-12 h-12 rounded-2xl bg-[#F8E81C] items-center justify-center">
                  <Icon name="pin" />
                </span>
                <div>
                  <h3 className="text-2xl font-medium tracking-tight">AdresseCheck</h3>
                  <p className="text-sm text-black/50">Free · coming soon to WordPress.org</p>
                </div>
              </div>
              <p className="text-xl">
                Danish address autocomplete for WooCommerce checkout, backed by Denmark&apos;s official address
                register.
              </p>
              <ul className="mt-6 space-y-3 text-black/70">
                {[
                  'Real addresses down to floor and door',
                  'Fills in street, postcode and city in one click',
                  'Built for Checkout blocks, no API key to buy',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Icon name="check" className="w-5 h-5 mt-0.5 shrink-0 text-[#1a8f3c]" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-10">
                <Link href="/adressecheck">
                  <a
                    className={`${plainLink} group inline-flex items-center gap-2 rounded-full bg-[#2f3234] text-white px-6 py-3 hover:bg-black transition`}
                  >
                    Learn more
                    <Icon name="arrow" className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="bg-[#F8E81C]/40 p-8 md:p-12 flex items-center">
              <BrowserFrame shot={adressecheckShot} priority className="w-full" />
            </div>
          </article>

          <div className="mt-6 rounded-[2rem] border-2 border-dashed border-black/10 p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <span className="inline-flex w-12 h-12 shrink-0 rounded-2xl bg-white ring-1 ring-black/10 items-center justify-center text-black/40">
              <Icon name="plus" />
            </span>
            <div>
              <h3 className="text-lg font-medium">More extensions on the way</h3>
              <p className="text-black/60">
                The next ones are in the works. Same approach: find what merchants struggle with, then fix it.
              </p>
            </div>
          </div>
        </section>

        <section id="approach" className="bg-white border-y border-black/5 py-24 scroll-mt-16">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeading
              eyebrow="Approach"
              title="How we build"
              intro="Fewer features, done right. Every Sixth extension follows the same three rules."
            />
            <div className="grid md:grid-cols-3 gap-6">
              {principles.map((principle) => (
                <div key={principle.title} className="rounded-3xl bg-[#fbfbf8] p-8 ring-1 ring-black/5">
                  <span className="inline-flex w-12 h-12 rounded-2xl bg-[#F8E81C] items-center justify-center mb-5">
                    <Icon name={principle.icon} />
                  </span>
                  <h3 className="text-xl font-medium mb-2">{principle.title}</h3>
                  <p className="text-black/60">{principle.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-16">
          <div className="rounded-[2rem] bg-[#2f3234] text-white p-8 md:p-14 grid md:grid-cols-[auto,1fr] gap-10 items-center">
            <div className="mx-auto w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden ring-8 ring-[#F8E81C]">
              <Image
                src="/images/profile.jpg"
                width={460}
                height={460}
                alt="Michael, founder of Sixth"
                layout="responsive"
              />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-[#F8E81C] mb-3">About</p>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight">Hi, I&apos;m Michael.</h2>
              <p className="mt-4 text-lg text-white/70 max-w-2xl">
                I&apos;m a frontend developer from Nærum, just north of Copenhagen. Sixth is my company, where I build
                WooCommerce extensions that solve one problem properly, starting with the ones Danish stores run into.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-2 text-xs tracking-widest text-black/40">
          <p>SIXTH.DK &copy; 2026 &#8226; CVR 38418998</p>
          <Link href="/adressecheck">
            <a className={`${plainLink} font-normal text-black/40 hover:text-black`}>ADRESSECHECK</a>
          </Link>
        </div>
      </footer>
    </div>
  )
}
