import '../styles/globals.css'
import { React, useState } from 'react'
import { NavBar } from "./components/navBar.js";
import Head from 'next/head'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  const [connected, setConnected] = useState(false);
  return (
    <>
      <Head>
        <link rel="Inheritable" href="/favicon.ico" />
      </Head>

      <NavBar connected={connected} setConnected={setConnected} />
      <Component {...pageProps} connected={connected} setConnected={setConnected} />
    </>)
}

export default MyApp
