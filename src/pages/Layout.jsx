import NavBar from '@components/NavBar';
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
        <NavBar />
      </header>
      <main className="px-5 max-w-5xl mx-auto md:px-20 pt-24 pb-5 lg:py-0">
        {children}
      </main>
    </main>
  );
}
export default Layout;
