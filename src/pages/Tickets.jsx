const Tickets = () => {
  return (
    <>
      <h1 className="mb-20 text-center text-4xl font-bold text-blue-950">Kup bilety</h1>
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="w-[60px] rounded-full border-2 border-blue-950 bg-amber-500 p-3 text-center text-2xl font-semibold text-white shadow">
            1
          </div>
          <p className="text-lg">Wybierz bilety</p>
        </div>
        <span className="mb-10 block h-2 w-8  bg-blue-950" />
      </div>
      <div className="flex flex-col items-center justify-center rounded-lg bg-white">
        <div>1 2 3</div>
        <div>4 5 6</div>
      </div>
    </>
  );
};

export default Tickets;
