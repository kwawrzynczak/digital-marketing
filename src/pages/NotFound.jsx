import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-20 text-center text-4xl font-bold text-blue-950">404 – Not Found!</h1>
      <Link
        to="/"
        className="rounded-xl bg-blue-400 p-4 text-center text-2xl font-bold text-white transition-all duration-200 hover:bg-blue-500"
      >
        Wróć do strony głównej
      </Link>
    </div>
  );
};

export default NotFound;
