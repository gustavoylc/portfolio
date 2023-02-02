import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Sling as Hamburger } from 'hamburger-react';
import Logo from '../../public/logo.svg';

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
    to: '/contact',
    text: 'Contact',
  },
];

function Navbar() {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const currentRoute = router.pathname;
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between max-w-6xl items-center mx-auto py-2">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="px-3"
      >
        <Link href="/">
          <Image
            src={Logo}
            alt="Gustavo's Logo"
            width={40}
            initial={{ x: 500, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          />
        </Link>
      </motion.div>
      <motion.ul
        className="md:flex md:gap-5 md:items-center text-xl hidden"
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        {routes.map((route) => (
          <li key={route.text}>
            <Link
              href={route.to}
              className={
                currentRoute === route.to
                  ? 'text-blue-500 ease-in duration-150 hover:text-blue-300 hover:ease-in hover:duration-200'
                  : 'hover:text-blue-300 hover:ease-in hover:duration-200'
              }
            >
              {route.text}
            </Link>
          </li>
        ))}
      </motion.ul>
      <motion.div
        className="md:hidden"
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Hamburger
          onToggle={handleToggle}
          label="Show menu"
          easing="ease-in"
          size={20}
        />
        {isOpen}
      </motion.div>
    </nav>
  );
}

export default Navbar;
