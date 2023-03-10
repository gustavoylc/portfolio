import NavBar from '@components/NavBar';
import { Poppins } from '@next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

function Layout({ children }) {
  return (
    <main className={`${poppins.variable} font-sans`}>
      <header>
        <NavBar />
      </header>
      <main
        className="px-5 max-w-5xl mx-auto md:px-20 pt-24 pb-5 
                   md:py-0 md:short:pt-24 md:tall:py-0
                   lg:short:pt-24 lg:tall:py-0                   
                  grid md:h-screen md:items-center 
                  md:short:h-full md:short:items-start 
                  md:tall:h-screen md:tall:items-center
                  lg:short:h-full lg:short:items-start
                  lg:tall:h-screen lg:tall:items-center font-normal"
      >
        {children}
      </main>
    </main>
  );
}
export default Layout;
