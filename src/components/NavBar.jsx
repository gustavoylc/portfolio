import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Sling as Hamburger } from 'hamburger-react';
import MobileMenu from '@components/MobileMenu';
import Logo from '../../public/logo.svg';
import NavLink from './NavLink';

const routes = [
  {
    to: '/about',
    text: 'About',
  },
  {
    to: '/projects',
    text: 'Projects',
  },
  {
    to: '/skills',
    text: 'Skills',
  },
  {
    to: '/contact',
    text: 'Contact',
  },
];

function NavBar() {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const currentRoute = router.pathname;
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };
  return (
    <nav className="fixed top-0 left-0 right-0 max-w-5xl flex justify-between  mx-auto p-2 py-4 md:px-20 backdrop-blur z-10">
      <motion.div
        initial={{ x: -400, opacity: 0, scale: 0.8 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="px-2 md:px-0"
        onClick={isOpen ? handleToggle : null}
      >
        <Link href="/">
          <Image src={Logo} alt="Gustavo's Logo" width={40} />
        </Link>
      </motion.div>

      <motion.ul
        className="md:flex md:gap-5 md:items-center hidden"
        initial={{ x: 400, opacity: 0, scale: 0.8 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        {routes.map((route) => (
          <li key={route.text}>
            <NavLink
              href={route.to}
              text={route.text}
              isActive={currentRoute === route.to}
            />
          </li>
        ))}
      </motion.ul>

      <motion.div
        className="md:hidden"
        initial={{ x: 400, opacity: 0, scale: 0.8 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Hamburger
          onToggle={handleToggle}
          label="Show menu"
          easing="ease-in"
          toggled={isOpen}
          size={20}
        />
        <AnimatePresence>
          {isOpen && (
            <MobileMenu
              isOpen={isOpen}
              routes={routes}
              currentRoute={currentRoute}
              handleToggle={handleToggle}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}

export default NavBar;
