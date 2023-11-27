import { StarIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const starsList = [1, 2, 3, 4, 5];
const FeedbackForm = () => {
  const [stars, setStars] = useState(-1);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h2 className="mb-10 text-center text-3xl font-semibold text-blue-950">
        Podziel się swoją opinią!
      </h2>
      <div className="flex flex-col items-center">
        <div className="flex h-fit flex-col text-center">
          <p className="mt-4 text-xl">Oceń wizytę:</p>
          <div className="mb-4 mt-2 flex">
            {starsList.map((star, index) => (
              <span
                onClick={() => setStars(index)}
                key={star}
                className={twMerge(
                  'cursor-pointer',
                  index <= stars ? 'text-amber-500' : 'text-gray-400',
                )}
              >
                <StarIcon className="h-10 w-10" />
              </span>
            ))}
          </div>
        </div>
        <div className="w-[500px] rounded-lg border bg-white p-8 shadow">
          <form className="flex flex-col gap-1">
            <label>Imię i nazwisko</label>
            <input type="text" maxLength={50} className="px-2 py-1.5" />
            <label>Email</label>
            <input type="email" maxLength={50} className="px-2 py-1.5" />
            <label>Tytuł opinii</label>
            <input type="text" maxLength={255} className="px-2 py-1.5" />
            <label>Napisz swoją opinię</label>
            <textarea className="h-44 resize-none px-3 py-2" />
            <input
              type="submit"
              onSubmit={(e) => handleSubmit(e)}
              value="Dodaj opinię"
              className="mt-6 w-44 cursor-pointer self-center rounded-lg bg-amber-500 p-3 font-bold tracking-wide text-white transition-all duration-200 hover:bg-amber-600"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default FeedbackForm;
