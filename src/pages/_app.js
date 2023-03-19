import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import Layout from '../Layouts/Layout';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio | gustavoylc</title>
        <meta name="description" content="Portfolio by gustavoylc" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </>
  );
}
