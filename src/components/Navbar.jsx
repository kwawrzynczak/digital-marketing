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
  {
    name: 'Wydarzenia',
    path: '/events',
  },
];
const tabsRight = [
  {
    name: 'Regulaminy',
    path: '/regulations',
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
    <>
      <div className="container flex min-w-full items-center justify-between bg-white px-10">
        <div className="tabs-left flex">
          {tabsLeft.map(({ name, path }) => (
            <NavbarTab key={name} name={name} path={path} />
          ))}
        </div>

        <div className="tabs-right flex">
          {tabsRight.map(({ name, path }) => (
            <NavbarTab key={name} name={name} path={path} />
          ))}
        </div>
      </div>
      <div
        className="logo absolute left-1/2 top-0 box-content flex w-64 -translate-x-1/2 justify-center rounded-full bg-white px-6 pb-6"
        style={{ clipPath: 'ellipse(38% 48% at 50% 40%)' }}
      >
        <Link to="/">
          <img src={'/logo.png'} className="w-36" />
        </Link>
      </div>
    </>
  );
};

export default Navbar;
