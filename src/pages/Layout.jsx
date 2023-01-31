import Navbar from '@components/Navbar';
import Head from 'next/head';

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Portfolio | gustavoylc</title>
        <meta name="description" content="Portfolio by gustavoylc" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="mx-52">
        <Navbar />
      </header>
      <main className="mx-52">{children}</main>
    </>
  );
}

export default Layout;
