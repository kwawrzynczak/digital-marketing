import AttractionTile from '../components/AttractionTile';

const attractions = [
  { name: 'Sauny', img: 'sauna.jpg' },
  { name: 'Baseny', img: 'basen.jpg' },
  { name: 'Zjeżdżalnie', img: 'slide.jpg' },
  { name: 'Restauracje', img: 'restauracja.jpg' },
  { name: 'SPA', img: 'spa.jpg' },
  { name: 'Nocleg', img: 'nocleg.jpg' },
];

const Attractions = () => {
  return (
    <>
      <h1 className="mb-20 text-center text-4xl font-bold text-blue-950">
        Odkryj nasze <span className="text-amber-500">niezwykłe</span> wodne atrakcje
        <span className="text-amber-500">!</span>
      </h1>
      <div className="grid grid-cols-1 gap-10 px-10 lg:grid-cols-2 xl:grid-cols-3">
        {attractions.map((attraction) => (
          <AttractionTile key={attraction.name} name={attraction.name} img={attraction.img} />
        ))}
      </div>
    </>
  );
};

export default Attractions;
