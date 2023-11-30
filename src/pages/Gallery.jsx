const images = [
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.jpg',
  '11.jpg',
  '1.jpg',
];

const Gallery = () => {
  return (
    <>
      <h1 className="mb-20 text-center text-4xl font-bold text-blue-950">Galeria</h1>
      <div className="flex flex-wrap justify-center gap-10">
        {images.map((image, index) => (
          <div className="w-1/3 transition-all duration-300 hover:scale-105" key={index}>
            <img src={image} alt="..." className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
