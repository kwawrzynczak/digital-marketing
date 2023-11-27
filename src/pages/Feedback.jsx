import FeedbackForm from '../components/FeedbackForm';
import FeedbackItem from '../components/FeedbackItem';

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
  {
    name: 'Barbara Jędrzejczyk',
    title: 'Przyjazny dla rodzin z dziećmi',
    date: '2023-03-01',
    stars: 5,
    content:
      'Nie spodziewałem się, że wizyta w Aquaparku może być tak satysfakcjonująca! Od momentu wejścia zostaliśmy przywitani uśmiechem personelu, co od razu stworzyło przyjazną atmosferę. Baseny i zjeżdżalnie były czyste i dobrze utrzymane. Dla dzieci były dostępne bezpieczne strefy, co sprawiło, że mogliśmy zrelaksować się, wiedząc, że są w dobrych rękach.',
  },
  {
    name: 'Maria Magdalena',
    title: 'Super miejsce!',
    date: '2023-06-01',
    stars: 5,
    content:
      'Aquapark to strzał w dziesiątkę! Baseny czyste, zjeżdżalnie ekscytujące, obsługa super. Dzieci zachwycone, my również. Na pewno wrócimy!',
  },
];
const Feedback = () => {
  return (
    <div className="px-10">
      <h1 className="mb-20 text-center text-4xl font-bold text-blue-950">Opinie</h1>

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
      </div>
      <FeedbackForm />
    </div>
  );
};

export default Feedback;
