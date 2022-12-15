import Head from 'next/head'
import Footer from './Sections/Footer'
import GettingStarted from './Sections/GetStarted'
import Stats from './Sections/Stats'
import Features from './Sections/Features'
import Divider from './components/UI/Divider/Divider'
import Hero from './Sections/Hero'
import Navigation from './Sections/Navigation'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cryptraffic - Crypto trading platform</title>
        <meta
          name='description'
          content='A secure crypto trading platform'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Divider />
        <Stats />
        <GettingStarted />
        <Divider />
      </main>
      <Footer />
    </>
  )
}
