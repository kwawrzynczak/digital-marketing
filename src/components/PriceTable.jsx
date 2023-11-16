const PriceTable = ({ active = false }) => {
  return (
    <div>
      {active && (
        <div className="flex justify-center rounded-t-xl bg-blue-600 p-4">
          <h3 className="font-semibold text-white">Dzisiaj obowiązuje taryfa NORMALNA</h3>
        </div>
      )}
    </div>
  );
};

export default PriceTable;
