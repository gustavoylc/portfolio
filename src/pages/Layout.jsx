import Navbar from '@components/Navbar';
import { Dosis } from '@next/font/google';

const dosis = Dosis({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700', '800'],
  variable: '--font-dosis',
});

function Layout({ children }) {
  return (
    <main className={`${dosis.variable} font-sans `}>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </main>
  );
}
// max-sm:max-w-lg max-md:max-w-xl max-lg:max-w-xl lg:max-w-4xl  mx-auto
export default Layout;
