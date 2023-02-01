import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
  const currentRoute = router.pathname;
  return (
    <nav className="py-3">
      <menu className=" text-2xl flex items-center justify-between">
        <Link href="/">
          <Image src={Logo} alt="Gustavo's Logo" width={40} />
        </Link>
        <ul className="flex gap-5">
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
      </menu>
    </nav>
  );
}

export default Navbar;
