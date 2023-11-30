import Carousel from '../components/Carousel';
import { ArrowRightCircleIcon } from '@heroicons/react/20/solid';
import FeedbackItem from '../components/FeedbackItem';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const feedbackList = [
  {
    name: 'Jan Kowalski',
    title: 'Ekstra!',
    date: '2023-06-01',
    stars: 5,
    content:
      'Byłem niedawno w Aquaparku i muszę powiedzieć, że to było niesamowite doświadczenie! Na początek, obsługa była niezwykle przyjazna i pomocna. Woda była czysta, baseny dobrze utrzymane, a atrakcje wodne zapewniły mnóstwo zabawy dla wszystkich grup wiekowych. Bardzo podobały mi się zjeżdżalnie, zwłaszcza ta największa - adrenalina na najwyższym poziomie! Restauracje i kawiarnie w Aquaparku również zasługują na uwagę. Menu było różnorodne, a jedzenie smaczne i świeże. Wygodne leżaki i obszary wypoczynku umożliwiły nam relaks między kąpielami. Cały obiekt był czysty, co dla mnie ma ogromne znaczenie. W skrócie, wizyta w Aquaparku była dla mnie i mojej rodziny niezapomniana. Polecam to miejsce wszystkim poszukującym doskonałej zabawy i relaksu w letnie dni!',
  },
  {
    name: 'Ola Kujawska',
    title: 'Fantastyczny Aquapark!',
    date: '2023-06-15',
    stars: 5,
    content:
      'Rewelacyjny dzień w Aquaparku! Baseny super, zjeżdżalnie mega emocjonujące, obsługa bardzo pomocna. Jedzenie pyszne, a atmosfera rewelacyjna. Na pewno tu wrócimy!',
  },
];

const Homepage = () => {
  return (
    <div className="w-full">
      <h1 className="mb-20 text-center text-4xl font-bold uppercase text-blue-950">
        Witaj w <span className="text-amber-500">Aquaparku Wyderka</span>!
      </h1>
      {/* <Carousel /> */}
      <div className="mt-20 w-full px-10">
        <div className="flex h-full w-full justify-center">
          <NavLink to={'/attractions'}>
            <div className="group relative h-[600px] w-[1200px] rounded-2xl bg-[url('basen.jpg')] bg-cover">
              <div className="absolute bottom-0 flex h-32 w-full items-center justify-center gap-8 rounded-b-2xl bg-white px-6">
                <h2 className="text-3xl font-bold text-blue-950">Sprawdź nasze atrakcje!</h2>
                <ArrowRightCircleIcon className="h-14 w-14 text-amber-500 transition-colors duration-200 group-hover:text-amber-600" />
              </div>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="mt-20 px-10">
        <h2 className="mb-20 text-center text-4xl font-bold text-blue-950">Nasze opinie</h2>

        <div className="mb-10 flex flex-col">
          {feedbackList.map(({ name, title, date, stars, content }) => (
            <FeedbackItem
              key={name}
              name={name}
              title={title}
              date={date}
              stars={stars}
              content={content}
            />
          ))}
          <Link
            to="/prices"
            className="mt-8 flex items-center justify-center gap-4 text-center text-4xl font-bold text-blue-950"
          >
            <p>
              Sprawdź<span className="mx-2 text-amber-500">naszą</span>ofertę!
            </p>
          </Link>
        </div>
      </div>

      <div className="mt-20 px-10"></div>
    </div>
  );
};

export default Homepage;
