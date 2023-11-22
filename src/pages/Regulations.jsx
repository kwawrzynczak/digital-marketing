import FaqTab from '../components/FaqTab';

const list = [
  { name: 'aquapark', regulations: 'regulations' },
  { name: 'sauna', regulations: 'regulations' },
  { name: 'spa', regulations: 'regulations' },
  { name: 'parking', regulations: 'regulations' },
];

const Regulations = () => {
  return (
    <div>
      <h1>Regulations</h1>
      <div className="flex flex-col items-start">
        {list.map((item) => (
          <FaqTab key={item.name} question={item.name} answer={item.regulations} />
        ))}
      </div>
    </div>
  );
};

export default Regulations;
