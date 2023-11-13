import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const NavbarTab = ({ name, path }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        twMerge(
          'flex h-8 items-center p-2 transition-colors duration-300 hover:bg-blue-400',
          isActive ? 'border-b-[3px] border-blue-950' : '',
        )
      }
    >
      <span className="font-bold uppercase text-blue-950">{name}</span>
    </NavLink>
  );
};

export default NavbarTab;
