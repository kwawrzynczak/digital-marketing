/* eslint-disable react-refresh/only-export-components */
import FaqTab from '../components/FaqTab';

const questions = [
  {
    question: 'Jakie są godziny otwarcia Aquaparku?',
    answer:
      'Godziny otwarcia poszczególnych obiektów Aquaparku są różne. Szczegółowe informacje znajdziesz na stronie Kontakt.',
  },
  {
    question: 'Czy muszę rezerwować bilety online czy mogę je zakupić na miejscu?',
    answer:
      'Bilety można zakupić zarówno online, jak i na miejscu w kasie Aquaparku. Jednak zalecamy zakup biletów online, aby uniknąć kolejek i zapewnić sobie szybszy dostęp do atrakcji.',
  },
  {
    question: 'Czy Aquapark posiada strefy dla najmłodszych?',
    answer:
      'Tak, Aquapark oferuje specjalne strefy dla dzieci, z łagodnymi zjeżdżalniami, płytami do zabawy w wodzie i innymi atrakcjami zapewniającymi bezpieczną rozrywkę dla najmłodszych.',
  },
  {
    question: 'Czy można przynieść własne jedzenie i napoje?',
    answer:
      'W Aquaparku obowiązuje polityka zakazu przynoszenia własnego jedzenia i napojów. Na terenie aquaparku dostępne są jednak liczne punkty gastronomiczne z różnorodnym menu.',
  },
  {
    question: 'Czy w Aquaparku dostępne są szafki na wartościowe rzeczy?',
    answer:
      'Tak, Aquapark udostępnia szafki na wartościowe przedmioty. Koszt wynajmu szafki jest wliczony w cenę biletu.',
  },
  {
    question: 'Czy Aquapark jest przyjazny dla osób niepełnosprawnych?',
    answer:
      'Tak, staramy się zapewnić dostępność dla osób niepełnosprawnych. Aquapark posiada windy, specjalne udogodnienia w strefie basenów i toalety dostosowane dla osób z ograniczoną mobilnością.',
  },
  {
    question: 'Czy można zorganizować przyjęcia urodzinowe w Aquaparku?',
    answer:
      'Tak, oferujemy możliwość zorganizowania przyjęć urodzinowych. Zapewniamy specjalne pakiety, w tym dostęp do atrakcji, stoliki do siedzenia i tort urodzinowy.',
  },
  {
    question: 'Czy w Aquaparku dostępne są lekcje pływania?',
    answer:
      'Tak, Aquapark oferuje lekcje pływania dla dzieci i dorosłych. Harmonogram lekcji jest dostępny na naszej stronie internetowej.',
  },
  {
    question: 'Czy można wynająć ręczniki w Aquaparku?',
    answer:
      'Tak, istnieje możliwość wynajęcia ręczników na miejscu. Goście mogą także przynieść swoje ręczniki.',
  },
  {
    question: 'Czy Aquapark jest otwarty w okresie zimowym?',
    answer:
      'Tak, Aquapark otwarty jest zarówno w sezonie zimowym i w sezonie letnim. Szczegółowe informacje dotyczące godzin otwarcia poszczególnych obiektów znajdują się na stronie Kontakt.',
  },
];
const FAQ = () => {
  return (
    <>
      <h1 className="mb-20 text-center text-4xl font-bold text-blue-950">
        FA<span className="text-amber-500">Q</span> – Najczęściej{' '}
        <span className="text-amber-500">zadawane</span> pytania
      </h1>
      <div className="flex flex-col items-start">
        {questions.map(({ question, answer }) => (
          <FaqTab key={question} question={question} answer={answer} />
        ))}
      </div>
    </>
  );
};
export default FAQ;
