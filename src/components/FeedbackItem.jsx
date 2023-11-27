import dayjs from 'dayjs';
import { twMerge } from 'tailwind-merge';
import { StarIcon } from '@heroicons/react/20/solid';

const FeedbackItem = ({ name, title, date, stars, content }) => {
  const starsList = [...Array(5).keys()];

  return (
    <div className="mb-6 rounded-lg bg-white p-6 shadow">
      <div className="flex gap-20">
        <div className="ml-10">
          <p className="font-semibold text-gray-600">{name}</p>
          <div className="flex items-center gap-4">
            <p className="mt-2 text-sm font-semibold text-gray-600">
              {dayjs(date).format('DD/MM/YYYY')}
            </p>
            <div className="mt-2 flex">
              {starsList.map((star, index) => (
                <span
                  key={star}
                  className={twMerge(index <= stars - 1 ? 'text-amber-500' : 'text-gray-400')}
                >
                  <StarIcon className="h-5 w-5" />
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mr-10 flex w-full flex-col">
          <p className="mx-4 mb-4 text-xl font-semibold text-blue-950">{title}</p>
          <span className="block w-full rounded border p-4 leading-7">{content}</span>
        </div>
      </div>
    </div>
  );
};

export default FeedbackItem;
