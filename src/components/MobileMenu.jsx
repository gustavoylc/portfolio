import { motion } from 'framer-motion';
import NavLink from '@components/NavLink';
import { useEffect, useRef } from 'react';

function MobileMenu({ isOpen, routes, currentRoute, handleToggle }) {
  const ref = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        event.target.className !== 'hamburger-react'
      ) {
        handleToggle();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return (
    <div className="relative h-screen">
      <motion.div
        className={`absolute top-0 right-0 w-[305px] bg-gray-100 shadow-lg rounded-md h-full bg-[#0f1521]  ${
          isOpen ? 'block' : 'hidden'
        }`}
        initial={{ x: '100%' }}
        exit={{ x: '100%' }}
        animate={{ x: isOpen ? '0%' : '100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        ref={ref}
      >
        <motion.div
          className="px-2 py-2 space-y-1"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            staggerChildren: 0.1,
          }}
        >
          <ul className="p-5 flex flex-col gap-5 text-gray-400 text-xl">
            {routes.map((route) => (
              <li key={route.text} onClick={handleToggle}>
                <NavLink
                  href={route.to}
                  text={route.text}
                  isActive={currentRoute === route.to}
                />
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default MobileMenu;
