import NavbarTab from './NavbarTab';
import { HomeIcon } from '@heroicons/react/20/solid';

const tabs = [
  {
    name: <HomeIcon className="h-6 w-6" />,
    path: '/',
  },
  {
    name: 'Atrakcje',
    path: '/attractions',
  },
  {
    name: 'Galeria',
    path: '/gallery',
  },
  {
    name: 'Kontakt',
    path: '/contact',
  },
  {
    name: 'Kup bilet online',
    path: '/tickets',
  },
];

const Navbar = () => {
  return (
    <div className="flex h-12 min-w-full items-center justify-end gap-12 bg-blue-300 px-12">
      {tabs.map(({ name, path }) => (
        <NavbarTab key={name} name={name} path={path} />
      ))}
    </div>
  );
};

export default Navbar;
