import { useState } from 'react';
import { ArrowRightCircleIcon, ArrowLeftCircleIcon } from '@heroicons/react/20/solid';

const images = [
  { id: 1, img: 'https://loremflickr.com/1280/600' },
  { id: 2, img: 'https://loremflickr.com/1280/600' },
  { id: 3, img: 'https://loremflickr.com/1280/600' },
  { id: 4, img: 'https://loremflickr.com/1280/600' },
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleLeftArrowClick = () => {
    const currentIndex = images.indexOf(currentImage);
    const nextIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentImage(images[nextIndex]);
  };

  const handleRightArrowClick = () => {
    const currentIndex = images.indexOf(currentImage);
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentImage(images[nextIndex]);
  };

  return (
    <>
      <span>{currentImage.id}</span>
      <div className="relative h-[600px] w-full self-center bg-red-200">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.img}
            alt="Carousel"
            className={`absolute left-0 top-0 h-full w-full object-cover transition-all duration-300 ${
              image === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      <div>
        <button onClick={handleLeftArrowClick}>
          <ArrowLeftCircleIcon className="h-6 w-6 text-gray-500" />
        </button>
        <button onClick={handleRightArrowClick}>
          <ArrowRightCircleIcon className="h-6 w-6 text-gray-500" />
        </button>
      </div>
    </>
  );
};

export default Carousel;
