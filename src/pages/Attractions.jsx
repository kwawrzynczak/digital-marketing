import AttractionTile from '../components/AttractionTile';

const attractions = [
  { name: 'Sauny' },
  { name: 'Baseny' },
  { name: 'Zjeżdżalnie' },
  { name: 'Restauracje' },
  { name: 'SPA' },
  { name: 'Nocleg' },
];

const Attractions = () => {
  return (
    <>
      <h1 className="mb-20 text-center text-4xl font-bold">Odkryj nasze wodne atrakcje</h1>
      <div className="grid grid-cols-3 gap-10">
        {attractions.map((attraction) => (
          <AttractionTile key={attraction.name} name={attraction.name} />
        ))}
      </div>
    </>
  );
};

export default Attractions;
