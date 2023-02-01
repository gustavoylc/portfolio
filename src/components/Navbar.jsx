import { useState } from 'react';
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
    <div className="fixed w-full max-sm:max-w-lg max-md:max-w-xl max-lg:max-w-xl lg:max-w-4xl max-sm:px-5 mx-auto">
      <nav className="py-3  text-xl flex items-center justify-between">
        <Link href="/">
          <Image src={Logo} alt="Gustavo's Logo" width={40} />
        </Link>
        <ul className="flex gap-5 items-center max-sm:hidden">
          {routes.map((route) => (
            <li key={route.text}>
              <Link
                href={route.to}
                className={
                  currentRoute === route.to
                    ? 'text-blue-500 ease-in duration-150'
                    : ''
                }
              >
                {route.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className="sm:hidden">
          <Hamburger
            onToggle={handleToggle}
            label="Show menu"
            easing="ease-in"
            size={20}
          />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
