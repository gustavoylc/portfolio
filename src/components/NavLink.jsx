import Link from 'next/link';

function NavLink({ href, text, isActive }) {
  return (
    <Link
      href={href}
      className={`
              ease-in duration-150 hover:text-white hover:ease-in hover:duration-100
               ${
                 isActive
                   ? 'text-blue-500 '
                   : 'hover:text-white hover:ease-in hover:duration-100'
               }`}
    >
      {text}
    </Link>
  );
}

export default NavLink;
