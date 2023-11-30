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
        <img src="5.jpg" alt="..." />
        <img src="9.jpg" alt="..." />
        <img src="3.jpg" alt="..." />
        <img src="7.jpg" alt="..." />
        <img src="6.jpg" alt="..." />
      </FlowbiteCarousel>
    </div>
  );
};

export default Carousel;
