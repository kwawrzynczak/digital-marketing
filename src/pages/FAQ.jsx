/* eslint-disable react-refresh/only-export-components */
import FaqTab from '../components/FaqTab';

const questions = [
  {
    question: 'Is team pricing available?',
    answer: 'Yes! You can purchase a license that you can share with your entire team.',
  },
  {
    question: 'Is team pricing available?',
    answer: 'Yes! You can purchase a license that you can share with your entire team.',
  },
  {
    question: 'Is team pricing available?',
    answer: 'Yes! You can purchase a license that you can share with your entire team.',
  },
  {
    question: 'Is team pricing available?',
    answer: 'Yes! You can purchase a license that you can share with your entire team.',
  },
];
const FAQ = () => {
  return (
    <>
      <h1 className="mb-20 text-center text-4xl font-bold text-blue-950">
        FA<span className="text-amber-500">Q</span> -- Najczęściej{' '}
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
