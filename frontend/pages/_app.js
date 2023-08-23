import "../styles/globals.css";
import { React, useState } from "react";
import NavBar from "../components/navBar.js";
import Head from "next/head";
import "../styles/globals.css";
import { BackgroundProvider } from "../components/BackgroundProvider";

function MyApp({ Component, pageProps }) {
  const [connected, setConnected] = useState(false);
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/Group.svg" />
      </Head>

      {/* <NavBar connected={connected} setConnected={setConnected} /> */}
      <BackgroundProvider>
        <Component
          {...pageProps}
          connected={connected}
          setConnected={setConnected}
        />
      </BackgroundProvider>
    </>
  );
}

export default MyApp;
