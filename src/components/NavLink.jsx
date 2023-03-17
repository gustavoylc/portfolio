import Link from 'next/link';

function NavLink({ href, text, isActive, isMobileMenu = false }) {
  return (
    <Link href={href}>
      <div
        className={`relative inline-block w-full p-1 ease-in duration-150 cursor-pointer  ${
          isActive &&
          isMobileMenu &&
          'bg-[#1f2736] rounded hover:bg-[#1f2736] hover:rounded'
        }
      ${isActive ? 'text-blue-500 ' : 'hover:text-white'}
      ${isMobileMenu && 'hover:bg-[#1f2736] hover:rounded'}
      `}
      >
        {text}
        {!isMobileMenu && (
          <div
            className={`overflow-hidden h-0.5 relative bg-blue-500 ${
              isActive ? 'w-full' : 'w-0'
            } transition-all duration-1000`}
          >
            <div className="absolute inset-0 transform origin-center scale-x-0 group-hover:scale-x-100 ease-out duration-200" />
          </div>
        )}
      </div>
    </Link>
  );
}

export default NavLink;
