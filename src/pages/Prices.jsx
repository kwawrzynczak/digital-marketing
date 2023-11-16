import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import PriceTable from '../components/PriceTable';

const types = [
  { id: 1, name: 'Aquapark Falka', header: 'Cennik Aquaparku' },
  { id: 2, name: 'Sauna & Spa', header: 'Cennik Sauny & Spa' },
  { id: 3, name: 'Basen Sportowy', header: 'Cennik Basenu Sportowego' },
  { id: 4, name: 'Aquafitness', header: 'Cennik Aquafitness' },
  { id: 5, name: 'Bilety grupowe', header: 'Cennik Biletów Grupowych' },
];

const Prices = () => {
  const [selected, setSelected] = useState(1);
  return (
    <>
      <div className="flex justify-center gap-10 rounded bg-white px-3">
        {types.map((type) => (
          <button
            onClick={() => setSelected(type.id)}
            className={twMerge(
              'h-16 border-b-4 border-transparent font-semibold text-blue-950 transition-all duration-300 hover:text-blue-600',
              selected === type.id && 'border-blue-600 text-blue-600',
            )}
            key={type.name}
          >
            {type.name}
          </button>
        ))}
      </div>
      <h1 className="my-12 text-center text-4xl font-bold text-blue-950">
        {types.find((type) => type.id === selected).header}
      </h1>
      <PriceTable active={selected === 1} />
    </>
  );
};
export default Prices;
