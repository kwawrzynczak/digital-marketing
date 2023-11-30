const Tickets = () => {
  return (
    <>
      <h1 className="mb-20 text-center text-4xl font-bold text-blue-950">Kup bilety</h1>
      <div className="grid grid-cols-3 gap-10 text-blue-950">
        <div className="h-96 cursor-pointer rounded-xl border-4 border-blue-400 bg-white p-8 text-center text-2xl font-bold uppercase shadow transition duration-300 hover:scale-105 hover:border-amber-500 ">
          Bilet normalny
          <p className="mt-2 text-xl font-semibold text-amber-500">Całodniowy</p>
          <p className="mt-10 text-6xl">130zł</p>
          <button className="mt-16 rounded-xl border-2 border-amber-500 bg-amber-500 px-4 py-3 text-white">
            Kup teraz!
          </button>
        </div>
        <div className="h-96 cursor-pointer rounded-xl border-4 border-blue-400 bg-white p-8 text-center text-2xl font-bold uppercase shadow transition duration-300 hover:scale-105 hover:border-amber-500 ">
          Bilet ulgowy
          <p className="mt-2 text-xl font-semibold text-amber-500">Całodniowy</p>
          <p className="mt-10 text-6xl">110zł</p>
          <button className="border-2border-amber-500 mt-16 rounded-xl bg-amber-500 px-4 py-3 text-white">
            Kup teraz!
          </button>
        </div>
        <div className="h-96 cursor-pointer rounded-xl border-4 border-blue-400 bg-white p-8 text-center text-2xl font-bold uppercase shadow transition duration-300 hover:scale-105 hover:border-amber-500 ">
          Bilet Sauna & SPA
          <p className="mt-2 text-xl font-semibold text-amber-500">Całodniowy</p>
          <p className="mt-10 text-6xl">120zł</p>
          <button className="mt-16 rounded-xl border-2 border-amber-500 bg-amber-500 px-4 py-3 text-white">
            Kup teraz!
          </button>
        </div>
      </div>
    </>
  );
};

export default Tickets;
