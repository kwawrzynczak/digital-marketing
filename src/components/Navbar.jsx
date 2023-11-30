import { Link } from 'react-router-dom';
import NavbarTab from './NavbarTab';
import { HomeIcon } from '@heroicons/react/24/outline';

const tabsLeft = [
  {
    name: <HomeIcon className="h-5 w-5" />,
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
    name: 'Oferta',
    path: '/prices',
  },
];
const tabsRight = [
  {
    name: 'Kontakt',
    path: '/contact',
  },
  {
    name: 'FAQ',
    path: '/faq',
  },
  {
    name: 'Opinie',
    path: '/feedback',
  },
  {
    name: 'Kup bilety',
    path: '/tickets',
  },
];

const Navbar = () => {
  return (
    <>
      <div className="container flex min-w-full items-center justify-between bg-white px-10">
        <div className="tabs-left flex items-center">
          <p className="pr-20 text-center text-xl font-extrabold text-transparent">
            Aquapark Falka
          </p>
          {tabsLeft.map(({ name, path }) => (
            <NavbarTab key={name} name={name} path={path} />
          ))}
        </div>

        <div className="tabs-right flex">
          {tabsRight.map(({ name, path }) => (
            <NavbarTab key={name} name={name} path={path} />
          ))}
          <p className="pr-20 text-center text-xl font-extrabold text-transparent">
            Aquapark Falka
          </p>
        </div>
      </div>

      <Link
        to="/"
        className="absolute left-1/2 top-0 flex -translate-x-1/2  flex-col items-center justify-center rounded-full bg-white p-3 "
      >
        <img src={'/logo.png'} className="w-28" />
      </Link>
    </>
  );
};

export default Navbar;
