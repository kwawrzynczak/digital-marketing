import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

const NavbarTab = ({ name, path, className }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        twMerge(
          'my-2 flex items-center justify-center px-4 text-blue-950 transition-all duration-300',
          path === '/tickets' &&
            'group relative mx-4 w-40 justify-self-end rounded-lg bg-amber-500 p-3 text-white hover:bg-amber-600',
          className,
        )
      }
    >
      <span
        className={twMerge(
          'font-semibold tracking-wide transition-all duration-500 hover:text-blue-800 group-hover:-translate-x-3',
          path === '/tickets' && 'font-bold hover:text-white',
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
