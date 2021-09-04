import Head from 'next/head'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Hack Club CUCEK</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Banner />
    </div>
  )
}
