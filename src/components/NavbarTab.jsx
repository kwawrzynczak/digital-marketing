import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

const NavbarTab = ({ name, path }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        twMerge(
          'flex items-center justify-center p-4 text-blue-950 transition-all duration-300 hover:bg-blue-400',
          path === '/tickets' &&
            'group relative w-40 rounded-lg bg-amber-500 p-3 text-white hover:bg-amber-600',
        )
      }
    >
      <span className="font-bold uppercase transition-all duration-300 group-hover:-translate-x-3">
        {name}
      </span>
      {path === '/tickets' && (
        <ArrowRightIcon className="absolute right-5 h-6 w-6 items-center justify-center text-white opacity-0 transition-all duration-300 group-hover:opacity-100" />
      )}
    </NavLink>
  );
};

export default NavbarTab;
