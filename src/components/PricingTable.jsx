import { twMerge } from 'tailwind-merge';

const scheduleDescriptions = [
  {
    name: 'normalna',
    description: 'Obowiązuje w dni powszednie od poniedziałku do piątku poza okresem wakacyjnym.',
  },
  { name: 'weekendowa', description: 'Obowiązuje we wszystkie weekendy i święta.' },
  {
    name: 'wakacyjna',
    description:
      'Obowiązuje od 24 czerwca do 31 sierpnia. Bilety całodniowe dostępne są tylko w przedsprzedaży online.',
  },
];

const PricingTable = ({ active = false, name = null, data, categories, sport = false }) => {
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
          'flex border-4 bg-white',
          active ? 'rounded-b-xl border-blue-600' : 'rounded-xl border-blue-200',
        )}
      >
        {name && (
          <div className="w-1/2 border-r-2 p-4">
            <h2 className="text-xl font-bold text-blue-950">Taryfa {name}</h2>
            <p>{scheduleDescriptions.find((schedule) => schedule.name === name).description}</p>
            <p>Dodatkowa opłata za przekroczenie wykupionego czasu 1 PLN/MIN/os.</p>
            <span className="font-semibold text-blue-950">Godziny otwarcia:</span>
            <p>Poniedziałek - Czwartek 14:00 - 22:00</p>
            <p>Piątek - Niedziela: 09:00 - 22:00</p>
          </div>
        )}
        <table className="w-full">
          <thead className="text-blue-950">
            <tr className="h-12 border-b-2">
              <th className="font-semibold uppercase">Rodzaj biletu</th>
              {categories.map((category, index) => (
                <th
                  key={index}
                  className={twMerge(
                    'border-l-2 font-semibold uppercase',
                    index === 1 && 'border-b-2',
                  )}
                >
                  {category}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.pricing.map((pricing, index) => (
              <tr
                key={pricing.name}
                className={twMerge(
                  'h-16 border-b-2 text-center',
                  index === data.pricing.length - 1 && 'border-none',
                )}
              >
                <td className="max-w-[200px] border-r-2 font-semibold">{pricing.name}</td>
                {pricing.prices.map((price, i) => (
                  <td
                    colSpan={(!sport && index > 1 && 3) || (sport && index > 1 && 2) || 1}
                    key={price}
                    className={twMerge(
                      i === pricing.prices.length - 1
                        ? 'border-none'
                        : 'min-w-[80px] max-w-[100px] border-r-2',
                    )}
                  >
                    {price}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingTable;
