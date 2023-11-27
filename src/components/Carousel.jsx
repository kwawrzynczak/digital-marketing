import { Carousel as FlowbiteCarousel } from 'flowbite-react';

const images = [
  { id: 1, src: 'https://loremflickr.com/1280/600' },
  { id: 2, src: 'https://loremflickr.com/1280/600' },
  { id: 3, src: 'https://loremflickr.com/1280/600' },
  { id: 4, src: 'https://loremflickr.com/1280/600' },
];

const Carousel = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-[500px]">
      <FlowbiteCarousel>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </FlowbiteCarousel>
    </div>
  );
};

export default Carousel;
