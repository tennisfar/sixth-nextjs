import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'

const description =
  "AdresseCheck adds Danish address autocomplete to WooCommerce checkout, using Denmark's official address register."

const screenshots = [
  {
    src: '/images/adressecheck/checkout-suggestions.png',
    width: 1032,
    height: 740,
    alt: 'Checkout address field showing suggestions for "Jagtvej 120", including individual flats',
    caption: 'Suggestions appear as the shopper types, down to floor and door.',
  },
  {
    src: '/images/adressecheck/checkout-filled.png',
    width: 1032,
    height: 740,
    alt: 'Checkout with address, postal code and city filled in from the selected suggestion',
    caption: 'One click fills in street, postal code and city.',
  },
  {
    src: '/images/adressecheck/settings.png',
    width: 1880,
    height: 866,
    alt: 'AdresseCheck settings under WooCommerce, Settings, Integration',
    caption: 'Works out of the box. Optional settings live under WooCommerce → Settings → Integration.',
  },
]

export default function AdresseCheck() {
  return (
    <Layout>
      <Head>
        <title>AdresseCheck – Danish address autocomplete for WooCommerce | Sixth</title>
        <meta name="description" content={description} />
      </Head>

      <article className="space-y-5">
        <header className="text-center space-y-2">
          <h1 className="text-3xl font-medium">AdresseCheck</h1>
          <p className="text-lg">Danish address autocomplete for WooCommerce checkout.</p>
          <p className="text-sm">Coming soon to the WooCommerce Marketplace.</p>
        </header>

        <p>
          Shoppers start typing their address and pick it from a list of real Danish addresses. Street, postal code and
          city are filled in automatically, so typos never become failed deliveries.
        </p>

        <ul className="list-disc pl-5 space-y-1">
          <li>Built for the WooCommerce Cart &amp; Checkout blocks, with classic checkout support.</li>
          <li>Uses Denmark&apos;s official address register (Klimadatastyrelsen&apos;s Adressevælger).</li>
          <li>No third-party subscription or API key to buy.</li>
          <li>Manual entry always works, even if the lookup is unavailable.</li>
          <li>Keyboard and screen-reader friendly.</li>
          <li>Compatible with High-Performance Order Storage (HPOS).</li>
          <li>Danish and English included.</li>
        </ul>

        {screenshots.map((shot, index) => (
          <figure key={shot.src} className="space-y-2">
            <div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
              <Image
                src={shot.src}
                width={shot.width}
                height={shot.height}
                alt={shot.alt}
                layout="responsive"
                priority={index === 0}
              />
            </div>
            <figcaption className="text-sm text-center">{shot.caption}</figcaption>
          </figure>
        ))}

        <section className="space-y-1">
          <h2 className="text-xl font-medium">Requirements</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>WordPress 7.0 or later</li>
            <li>WooCommerce 11.1 or later</li>
            <li>PHP 7.4 or later</li>
          </ul>
        </section>

        <p className="text-sm text-center">
          Made by{' '}
          <Link href="/">
            <a>Sixth</a>
          </Link>{' '}
          in Denmark.
        </p>
      </article>
    </Layout>
  )
}
