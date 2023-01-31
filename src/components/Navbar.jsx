import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/logo.svg';

function Navbar() {
  return (
    <nav className="py-3">
      <menu className=" text-2xl flex items-center justify-between">
        <Link href="/">
          <Image src={Logo} alt="Gustavo's Logo" width={40} />
        </Link>

        <ul className="flex gap-5">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </menu>
    </nav>
  );
}

export default Navbar;
