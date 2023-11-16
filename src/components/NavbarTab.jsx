import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

const NavbarTab = ({ name, path, className }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        twMerge(
          'mx-6 flex h-20 items-center justify-center border-b-2 border-transparent text-blue-950 transition-all duration-300 hover:text-blue-600',
          isActive && 'border-b-4 border-blue-600 text-blue-600',
          path === '/tickets' &&
            'group relative ml-6 h-12 w-40 self-center justify-self-end rounded-lg border-transparent bg-amber-500 p-3 text-white hover:bg-amber-600 hover:text-white',
          className,
        )
      }
    >
      <span
        className={twMerge(
          'font-semibold tracking-wide transition-all duration-500 group-hover:-translate-x-3',
          path === '/tickets' && 'font-bold hover:text-white',
          path === '/' && 'box-content rounded-full border p-2.5 hover:border-blue-600',
        )}
      >
        {name}
      </span>
      {path === '/tickets' && (
        <ArrowRightIcon className="absolute right-5 h-6 w-6 items-center justify-center text-white opacity-0 transition-all duration-300 group-hover:opacity-100" />
      )}
    </NavLink>
  );
};

export default NavbarTab;
