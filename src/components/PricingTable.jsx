import { twMerge } from 'tailwind-merge';

const schedules = [
  {
    name: 'normalna',
    description:
      'Obowiązuje w dni powszednie od od poniedziałku do piątku poza okresem wakacyjnym.',
  },
  { name: 'weekendowa', description: 'Obowiązuje we wszystkie weekendy i święta.' },
  {
    name: 'wakacyjna',
    description:
      'Obowiązuje od 24 czerwca do 31 sierpnia. Bilety całodniowe dostępne są tylko w przedsprzedaży online.',
  },
];

const PricingTable = ({ active = false, name = null, pricing }) => {
  return (
    <div className="mb-10">
      {active && (
        <div className="flex justify-center rounded-t-xl bg-blue-600 p-4">
          <p className="font-semibold text-white">
            Dzisiaj obowiązuje taryfa <span className="uppercase">{name}</span>
          </p>
        </div>
      )}
      <div
        className={twMerge(
          'flex bg-white',
          active ? 'rounded-b-xl border-4 border-blue-600' : 'rounded-lg',
        )}
      >
        {name && (
          <div className="border-r-2 p-4">
            <h2 className="text-xl font-bold text-blue-950">Taryfa {name}</h2>
            <p>{schedules.find((schedule) => schedule.name === name).description}</p>
            <p>Dodatkowa opłata za przekroczenie wykupionego czasu 1 PLN/MIN/os.</p>
            <span className="font-semibold text-blue-950">Godziny otwarcia:</span>
            <p>Poniedziałek - Czwartek 14:00 - 22:00</p>
            <p>Piątek - Niedziela: 09:00 - 22:00</p>
          </div>
        )}
        <table className="w-full">
          <thead className="text-blue-950">
            <tr className="border-b-2 border-slate-200">
              <th className="font-semibold uppercase">Rodzaj biletu</th>
              <th className="font-semibold uppercase">Bilet 1H</th>
              <th className="font-semibold uppercase">Bilet 3H</th>
              <th className="font-semibold uppercase">Cały dzień</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-semibold">Ulgowy / Rodzinny (cena za osobę)</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="font-semibold">Normalny</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingTable;
