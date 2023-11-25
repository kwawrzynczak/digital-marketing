import { useState } from 'react';
import { ArrowRightCircleIcon, ArrowLeftCircleIcon } from '@heroicons/react/20/solid';
import { Button } from 'flowbite-react';

const images = [
  { id: 1, src: 'https://loremflickr.com/1280/600' },
  { id: 2, src: 'https://loremflickr.com/1280/600' },
  { id: 3, src: 'https://loremflickr.com/1280/600' },
  { id: 4, src: 'https://loremflickr.com/1280/600' },
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
      <div>
        <Button>Click me</Button>
      </div>
    </>
  );
};

export default Carousel;
