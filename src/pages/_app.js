import '@/styles/globals.css';
import { Dosis } from '@next/font/google';
import Layout from './Layout';

const dosis = Dosis({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700', '800'],
  variable: '--font-dosis',
});

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
