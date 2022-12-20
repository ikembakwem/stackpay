import Head from 'next/head';
import Footer from '../components/Footer';
import GettingStarted from '../components/GetStarted';
import Stats from '../components/Stats';
import Features from '../components/Features';
import Divider from '../components/components/UI/Divider/Divider';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import Overview from '../components/Overview';

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
        <Overview />
        <GettingStarted />
        <Divider />
      </main>
      <Footer />
    </>
  );
}
