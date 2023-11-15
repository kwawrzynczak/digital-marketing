import { Link } from 'react-router-dom';
import NavbarTab from './NavbarTab';
import { HomeIcon } from '@heroicons/react/20/solid';

const tabs = [
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
    name: 'FAQ',
    path: '/faq',
  },
  {
    name: 'Kup bilety',
    path: '/tickets',
  },
];

const Navbar = () => {
  return (
    <div className="min-w-full flex-col bg-white">
      <div className="flex items-center justify-center border-b-2 p-2">
        <Link to="/">
          <img src={'/logo.svg'} className="h-20 w-20" />
        </Link>
      </div>
      <div className="flex items-center justify-center border-b-2">
        {tabs.map(({ name, path }) => (
          <NavbarTab key={name} name={name} path={path} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
