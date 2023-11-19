import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import PricingTable from '../components/PricingTable';
import dayjs from 'dayjs';

const types = [
  {
    id: 1,
    name: 'Aquapark Falka',
    header: 'Cennik Aquaparku',
    categories: ['1h', '3h', 'Cały dzień'],
    schedules: [
      {
        schedule: 'normalna',
        pricing: [
          { name: 'Ulgowy / Rodzinny (cena za osobę)', prices: ['40 zł', '80 zł', '110 zł'] },
          { name: 'Normalny', prices: ['50 zł', '110 zł', '130 zł'] },
        ],
      },
      {
        schedule: 'weekendowa',
        pricing: [
          { name: 'Ulgowy / Rodzinny (cena za osobę)', prices: ['40 zł', '80 zł', '110 zł'] },
          { name: 'Normalny', prices: ['50 zł', '110 zł', '130 zł'] },
        ],
      },
      {
        schedule: 'wakacyjna',
        pricing: [
          { name: 'Ulgowy / Rodzinny (cena za osobę)', prices: ['40 zł', '80 zł', '110 zł'] },
          { name: 'Normalny', prices: ['50 zł', '110 zł', '130 zł'] },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Sauna & Spa',
    header: 'Cennik Sauny & Spa',
    categories: ['1h', '3h', 'Cały dzień'],
    schedules: [
      {
        schedule: 'normalna',
        pricing: [
          { name: 'Sauna & Spa', prices: ['60 zł', '90 zł', '120 zł'] },
          { name: 'Sauna & Aquapark', prices: ['90 zł', '140 zł', '190 zł'] },
          { name: 'Sauna + Basen sportowy (2 godziny)', prices: ['70 zł'] },
        ],
      },
      {
        schedule: 'weekendowa',
        pricing: [
          { name: 'Sauna & Spa', prices: ['60 zł', '90 zł', '120 zł'] },
          { name: 'Sauna & Aquapark', prices: ['90 zł', '140 zł', '190 zł'] },
          { name: 'Sauna + Basen sportowy (2 godziny)', prices: ['70 zł'] },
        ],
      },
      {
        schedule: 'wakacyjna',
        pricing: [
          { name: 'Sauna & Spa', prices: ['60 zł', '90 zł', '120 zł'] },
          { name: 'Sauna & Aquapark', prices: ['90 zł', '140 zł', '190 zł'] },
          { name: 'Sauna + Basen sportowy (2 godziny)', prices: ['70 zł'] },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Basen Sportowy',
    header: 'Cennik Basenu Sportowego',
    categories: ['1h', '10 wejść po 1h'],
    schedules: [
      {
        schedule: 'normalna',
        pricing: [
          { name: 'Ulgowy', prices: ['15 zł', '100 zł'] },
          { name: 'Normalny', prices: ['20 zł', '150 zł'] },
          { name: 'Przejście z Aquaparku do basenu sportowego', prices: ['0.50 zł/min'] },
          { name: 'Przejście z basenu sportowego do Aquaparku', prices: ['1 zł/min'] },
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'Aquafitness',
    header: 'Cennik Aquafitness',
    categories: [],
    schedules: [],
  },
  {
    id: 5,
    name: 'Bilety grupowe',
    header: 'Cennik Biletów Grupowych',
    categories: [],
    schedules: [],
  },
];

const Prices = () => {
  const today = dayjs();
  const day = today.get('day');
  const startDate = dayjs('2023-06-24');
  const endDate = dayjs('2023-08-31');
  const [selected, setSelected] = useState(1);

  const pricingTables = [
    <PricingTable
      key={0}
      name="normalna"
      active={day !== 6 && day !== 0}
      data={types.find((type) => type.id === selected).schedules[0]}
      categories={types.find((type) => type.id === selected).categories}
    />,
    <PricingTable
      key={1}
      name="weekendowa"
      active={day === 6 || day === 0}
      data={types.find((type) => type.id === selected).schedules[1]}
      categories={types.find((type) => type.id === selected).categories}
    />,
    <PricingTable
      key={2}
      name="wakacyjna"
      active={today > startDate && today < endDate}
      data={types.find((type) => type.id === selected).schedules[2]}
      categories={types.find((type) => type.id === selected).categories}
    />,
  ].sort((a, b) => (b.props.active ? 1 : -1));

  return (
    <>
      <div className="flex justify-center gap-10 rounded-xl bg-white px-3">
        {types.map((type) => (
          <button
            onClick={() => setSelected(type.id)}
            className={twMerge(
              'h-16 border-b-4 border-transparent font-semibold text-blue-950 hover:text-blue-600',
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

      {(selected === 1 && pricingTables) || (selected === 2 && pricingTables)}
      {selected === 3 && (
        <PricingTable
          sport
          data={types.find((type) => type.id === selected).schedules[0]}
          categories={types.find((type) => type.id === selected).categories}
        />
      )}
      {selected === 4 && <div></div>}
      {selected === 5 && <div></div>}
    </>
  );
};

export default Prices;
