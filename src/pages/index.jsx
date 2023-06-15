import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <Head>
        <title>CLaaS by Moffin - Report bad paying customers to credit bureau</title>
        <meta
          name="Moffin | CLaaS"
          content="Reporta a clientes malos pagadores a Buró de Crédito"
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <Pricing />
        <CallToAction />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
