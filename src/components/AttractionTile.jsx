import { ArrowRightCircleIcon } from '@heroicons/react/20/solid';
import { NavLink } from 'react-router-dom';

const AttractionTile = ({ name }) => {
  return (
    <NavLink
      to={'/'}
      className="group relative h-60 rounded-2xl bg-blue-400 shadow transition-all duration-300 hover:scale-[1.02]"
    >
      <div className="absolute bottom-0 flex h-20 w-full items-center justify-between rounded-b-2xl bg-white px-6">
        <h2 className="text-2xl font-bold text-blue-950">{name}</h2>

        <ArrowRightCircleIcon className="h-14 w-14 text-amber-500 transition-colors duration-200 group-hover:text-amber-600" />
      </div>
    </NavLink>
  );
};

export default AttractionTile;
