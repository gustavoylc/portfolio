import Link from 'next/link';

function NavLink({ href, text, isActive }) {
  return (
    <Link
      href={href}
      className={`
              ease-in duration-150 hover:text-blue-300 hover:ease-in hover:duration-200
               ${
                 isActive
                   ? 'text-blue-500 '
                   : 'hover:text-blue-300 hover:ease-in hover:duration-200'
               }`}
    >
      {text}
    </Link>
  );
}

export default NavLink;
