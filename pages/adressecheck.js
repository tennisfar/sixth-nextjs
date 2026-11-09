import Head from 'next/head'
import Image from 'next/image'

const description =
  "AdresseCheck adds Danish address autocomplete to WooCommerce checkout, using Denmark's official address register. Fewer typos, fewer failed deliveries."

// The site's global link styling (yellow underline, no wrapping) is for inline text links only.
const plainLink = 'before:hidden whitespace-normal'

const screenshots = {
  suggestions: {
    src: '/images/adressecheck/checkout-suggestions.png',
    width: 1032,
    height: 740,
    alt: 'Checkout address field showing suggestions for "Jagtvej 120", including individual flats',
  },
  filled: {
    src: '/images/adressecheck/checkout-filled.png',
    width: 1032,
    height: 740,
    alt: 'Checkout with address, postal code and city filled in from the selected suggestion',
  },
  settings: {
    src: '/images/adressecheck/settings.png',
    width: 1880,
    height: 866,
    alt: 'AdresseCheck settings under WooCommerce, Settings, Integration',
  },
}

const benefits = [
  {
    icon: 'truck',
    title: 'Fewer failed deliveries',
    text: 'Every suggestion is a real address from Danmarks Adresseregister, so typos in street names and postcodes never reach your shipping labels.',
  },
  {
    icon: 'bolt',
    title: 'A faster checkout',
    text: 'Shoppers type a few letters, pick their address and move on. Street, postcode and city are filled in for them.',
  },
  {
    icon: 'spark',
    title: 'Nothing to set up',
    text: 'Activate the plugin and it works. No third-party account, no API key to buy, no monthly lookup fees.',
  },
]

const features = [
  {
    title: 'Built for Checkout blocks',
    text: "Made for WooCommerce's Cart & Checkout blocks from day one, with classic checkout supported too.",
  },
  {
    title: 'Official address data',
    text: "Powered by Klimadatastyrelsen's Adressevælger, the government replacement for DAWA.",
  },
  {
    title: 'Down to floor and door',
    text: 'Apartments are suggested with floor and door, so parcels reach the right flat.',
  },
  {
    title: 'Manual entry always works',
    text: 'Autocomplete is an enhancement, never a gate. If the lookup is unavailable, shoppers just type.',
  },
  {
    title: 'Accessible',
    text: 'A proper ARIA combobox: arrow keys to browse, Enter to pick, Escape to close, and screen-reader friendly.',
  },
  {
    title: 'HPOS compatible',
    text: 'Declares compatibility with High-Performance Order Storage, the WooCommerce default.',
  },
  {
    title: 'Only where it matters',
    text: 'Activates when the shopper selects Denmark. Other countries keep the standard checkout.',
  },
  {
    title: 'Danish & English',
    text: 'Ships with a full Danish translation for the settings screen and messages.',
  },
  {
    title: 'Private by design',
    text: 'Lookups go through your own store, never from the shopper’s browser to a third party.',
  },
]

const faqs = [
  {
    q: 'Do I need an API key or a paid account?',
    a: 'No. AdresseCheck uses Denmark’s free, official address service. If Klimadatastyrelsen introduces personal tokens later, you can paste yours under WooCommerce → Settings → Integration.',
  },
  {
    q: 'What happens with customers outside Denmark?',
    a: 'Nothing changes for them. The autocomplete only switches on when Denmark is selected as the country.',
  },
  {
    q: 'What if the address service is down?',
    a: 'Checkout keeps working. Suggestions simply don’t appear, and the shopper types the address as usual.',
  },
  {
    q: 'Does it work with my theme?',
    a: 'It enhances WooCommerce’s own address fields instead of replacing them, so it follows your theme’s checkout styling.',
  },
]

function Icon({ name, className = 'w-6 h-6' }) {
  const paths = {
    truck:
      'M3 7h11v9H3zM14 10h4l3 3v3h-7M7.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z',
    bolt: 'M13 3L5 13h6l-1 8 8-10h-6l1-8z',
    spark: 'M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6',
    check: 'M5 12.5l4.5 4.5L19 7.5',
    pin: 'M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z',
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  )
}

function BrowserFrame({ shot, priority = false, className = '' }) {
  return (
    <div className={`rounded-2xl bg-white shadow-2xl shadow-black/10 ring-1 ring-black/5 overflow-hidden ${className}`}>
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-black/5 bg-[#f4f8fb]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-black/40 truncate">yourstore.dk/checkout</span>
      </div>
      <Image
        src={shot.src}
        width={shot.width}
        height={shot.height}
        alt={shot.alt}
        layout="responsive"
        priority={priority}
      />
    </div>
  )
}

function Highlight({ children }) {
  return <span className="bg-[linear-gradient(transparent_62%,#F8E81C_62%)] px-1 -mx-1">{children}</span>
}

function SectionHeading({ eyebrow, title, intro }) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-12">
      <p className="text-sm font-medium uppercase tracking-widest text-black/50 mb-3">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight">{title}</h2>
      {intro && <p className="mt-4 text-lg text-black/60">{intro}</p>}
    </div>
  )
}

function Step({ number, title, text, shot, reverse }) {
  return (
    <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
      <div className={reverse ? 'md:order-2' : ''}>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F8E81C] font-medium mb-5">
          {number}
        </span>
        <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-3">{title}</h3>
        <p className="text-lg text-black/60">{text}</p>
      </div>
      <BrowserFrame shot={shot} />
    </div>
  )
}

export default function AdresseCheck() {
  return (
    <div className="min-h-full bg-[#fbfbf8] text-[#2f3234]">
      <Head>
        <title>AdresseCheck – Danish address autocomplete for WooCommerce | Sixth</title>
        <meta name="description" content={description} />
        <meta property="og:title" content="AdresseCheck – Danish address autocomplete for WooCommerce" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://sixth.dk/images/adressecheck/checkout-suggestions.png" />
        <link href="/favicon-16x16.png" rel="icon" type="image/png" />
      </Head>

      <header className="sticky top-0 z-20 bg-[#fbfbf8]/80 backdrop-blur border-b border-black/5">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className={`${plainLink} flex items-center gap-2 text-lg`}>
            <span className="inline-flex w-8 h-8 rounded-lg bg-[#F8E81C] items-center justify-center">
              <Icon name="pin" className="w-5 h-5" />
            </span>
            AdresseCheck
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#how-it-works" className={`${plainLink} font-normal text-black/60 hover:text-black`}>
              How it works
            </a>
            <a href="#features" className={`${plainLink} font-normal text-black/60 hover:text-black`}>
              Features
            </a>
            <a href="#faq" className={`${plainLink} font-normal text-black/60 hover:text-black`}>
              FAQ
            </a>
          </div>
          <span className="text-xs md:text-sm rounded-full bg-[#2f3234] text-white px-4 py-2">
            Coming soon to WooCommerce
          </span>
        </nav>
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-[#F8E81C]/40 blur-3xl" />
          <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-24 md:pt-24 grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-black/10 px-3 py-1 text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-[#28c840]" />
                WooCommerce extension for Danish stores
              </p>
              <h1 className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.05]">
                Danish addresses, <Highlight>right the first time.</Highlight>
              </h1>
              <p className="mt-6 text-xl text-black/60 max-w-xl">
                AdresseCheck adds address autocomplete to your WooCommerce checkout, backed by Denmark&apos;s official
                address register. Shoppers type less, and parcels reach the right door.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#how-it-works"
                  className={`${plainLink} rounded-full bg-[#2f3234] text-white px-6 py-3 hover:bg-black transition`}
                >
                  See how it works
                </a>
                <span className="text-sm text-black/60">Launching on the WooCommerce Marketplace</span>
              </div>
              <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-black/70">
                {['Checkout blocks', 'HPOS compatible', 'Official address data', 'Danish & English'].map((label) => (
                  <li key={label} className="flex items-center gap-2">
                    <Icon name="check" className="w-4 h-4 text-[#1a8f3c]" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <BrowserFrame shot={screenshots.suggestions} priority className="lg:rotate-1" />
              <div className="absolute -top-6 right-4 md:-right-6 flex items-center gap-3 rounded-2xl bg-white shadow-xl ring-1 ring-black/5 px-4 py-3">
                <span className="inline-flex w-9 h-9 rounded-full bg-[#e8f7ed] text-[#1a8f3c] items-center justify-center">
                  <Icon name="check" className="w-5 h-5" />
                </span>
                <div className="text-sm leading-tight">
                  <p className="font-medium">Real addresses only</p>
                  <p className="text-black/50">Danmarks Adresseregister</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-3xl bg-white p-8 ring-1 ring-black/5 shadow-sm">
                <span className="inline-flex w-12 h-12 rounded-2xl bg-[#F8E81C] items-center justify-center mb-5">
                  <Icon name={benefit.icon} />
                </span>
                <h3 className="text-xl font-medium mb-2">{benefit.title}</h3>
                <p className="text-black/60">{benefit.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="bg-white border-y border-black/5 py-24 scroll-mt-16">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeading
              eyebrow="How it works"
              title="From a few letters to a verified address"
              intro="AdresseCheck enhances WooCommerce's own address fields, so it fits right into your theme."
            />
            <div className="space-y-24">
              <Step
                number="1"
                title="Shoppers start typing"
                text="Suggestions appear after a few letters, straight from Danmarks Adresseregister. Apartment buildings are listed down to floor and door."
                shot={screenshots.suggestions}
              />
              <Step
                number="2"
                title="One click fills the rest"
                text="Choosing a suggestion fills in street, postcode and city in one go, ready for shipping rates and labels."
                shot={screenshots.filled}
                reverse
              />
            </div>
            <div className="mt-24">
              <div className="max-w-2xl mb-8">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F8E81C] font-medium mb-5">
                  3
                </span>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-3">Activate, and you&apos;re done</h3>
                <p className="text-lg text-black/60">
                  It works the moment you activate it. The only setting lives under WooCommerce → Settings →
                  Integration, ready for when Klimadatastyrelsen introduces personal access tokens.
                </p>
              </div>
              <BrowserFrame shot={screenshots.settings} />
            </div>
          </div>
        </section>

        <section id="features" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-16">
          <SectionHeading eyebrow="Features" title="Everything a Danish checkout needs" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <span className="shrink-0 inline-flex w-8 h-8 rounded-full bg-[#F8E81C] items-center justify-center">
                  <Icon name="check" className="w-4 h-4" />
                </span>
                <div>
                  <h3 className="font-medium mb-1">{feature.title}</h3>
                  <p className="text-black/60">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="bg-white border-y border-black/5 py-24 scroll-mt-16">
          <div className="max-w-3xl mx-auto px-6">
            <SectionHeading eyebrow="FAQ" title="Questions, answered" />
            <div className="divide-y divide-black/10">
              {faqs.map((faq) => (
                <details key={faq.q} className="group py-6">
                  <summary className="flex items-center justify-between gap-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden text-lg font-medium">
                    {faq.q}
                    <span className="shrink-0 text-2xl leading-none text-black/40 group-open:rotate-45 transition">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-black/60">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-white p-8 md:p-10 ring-1 ring-black/5 shadow-sm">
              <h2 className="text-2xl font-medium mb-6">Requirements</h2>
              <dl className="space-y-4">
                {[
                  ['WordPress', '7.0 or later'],
                  ['WooCommerce', '11.1 or later'],
                  ['PHP', '7.4 or later'],
                  ['Store country', 'Denmark (other countries unaffected)'],
                ].map(([term, value]) => (
                  <div key={term} className="flex justify-between gap-6 border-b border-black/5 pb-4 last:border-0">
                    <dt className="text-black/60">{term}</dt>
                    <dd className="font-medium text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="rounded-3xl bg-[#2f3234] text-white p-8 md:p-10 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-medium tracking-tight">
                  Coming soon to the <span className="text-[#F8E81C]">WooCommerce Marketplace</span>
                </h2>
                <p className="mt-4 text-white/70">
                  We&apos;re preparing AdresseCheck for the official WooCommerce Marketplace, where you&apos;ll be able
                  to buy it with updates and support.
                </p>
              </div>
              <p className="mt-8 text-sm text-white/50">
                Made in Denmark by{' '}
                <a href="https://sixth.dk" className={`${plainLink} text-white underline underline-offset-4`}>
                  Sixth
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-2 text-xs tracking-widest text-black/40">
          <p>SIXTH.DK &copy; 2026 &#8226; CVR 38418998</p>
          <p>AdresseCheck uses data from Danmarks Adresseregister (CC BY 4.0).</p>
        </div>
      </footer>
    </div>
  )
}
