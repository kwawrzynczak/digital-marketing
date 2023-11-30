import Map from '../components/Map';

import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div>
      <h1 className="mb-20 text-center text-4xl font-bold text-blue-950">Kontakt</h1>
      <div className="grid grid-cols-2 gap-6 place-self-center">
        <div className="w-full bg-white p-8 shadow ">
          <h2 className="text-3xl font-semibold text-blue-950">Dane kontaktowe</h2>
          <div className="-ml-8 mb-8 mt-4 h-1 w-16 bg-amber-500"></div>
          <div className="flex h-full flex-col gap-4">
            <div className="border-b border-gray-300 pb-8">
              <h3 className="mb-4 font-bold uppercase text-blue-600">Aquapark Wyderka</h3>
              <div className="flex justify-between">
                <div>
                  <p className="mb-4 font-semibold text-gray-600">Dane kontaktowe</p>
                  <span className="block border-l border-gray-300 p-3 text-[0.95rem]">
                    <p className="text-gray-600">Email: wyderka@info.pl</p>
                    <p className="text-gray-600">Telefon: +48 606506605</p>
                  </span>
                </div>
                <div>
                  <p className="mb-4 font-semibold text-gray-600">Godziny otwarcia</p>
                  <span className="block border-l border-gray-300 p-3 text-[0.95rem]">
                    <p className="text-gray-600">poniedziałek - czwartek: 14:00 - 22:00</p>
                    <p className="text-gray-600">piątek - niedziela: 09:00 - 23:00</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="border-b border-gray-300 pb-8">
              <h3 className="mb-4 font-bold uppercase text-blue-600">Aquapark SPA & SAUNA</h3>
              <div className="flex justify-between">
                <div>
                  <p className="mb-4 font-semibold text-gray-600">Dane kontaktowe</p>
                  <span className="block border-l border-gray-300 p-3 text-[0.95rem]">
                    <p className="text-gray-600">Email: wyderka@info.pl</p>
                    <p className="text-gray-600">Telefon: +48 606506605</p>
                  </span>
                </div>
                <div>
                  <p className="mb-4 font-semibold text-gray-600">Godziny otwarcia</p>
                  <span className="block border-l border-gray-300 p-3 text-[0.95rem]">
                    <p className="text-gray-600">poniedziałek - czwartek: 14:00 - 22:00</p>
                    <p className="text-gray-600">piątek - niedziela: 09:00 - 23:00</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="pb-6">
              <h3 className="mb-4 font-bold uppercase text-blue-600">Aqua Fitness</h3>
              <div className="flex justify-between">
                <div>
                  <p className="mb-4 font-semibold text-gray-600">Dane kontaktowe</p>
                  <span className="block border-l border-gray-300 p-3 text-[0.95rem]">
                    <p className="text-gray-600">Email: wyderka@info.pl</p>
                    <p className="text-gray-600">Telefon: +48 606506605</p>
                  </span>
                </div>
                <div>
                  <p className="mb-4 font-semibold text-gray-600">Godziny otwarcia</p>
                  <span className="block border-l border-gray-300 p-3 text-[0.95rem]">
                    <p className="text-gray-600">poniedziałek - czwartek: 14:00 - 22:00</p>
                    <p className="text-gray-600">piątek - niedziela: 09:00 - 23:00</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 shadow">
          <h2 className="text-3xl font-semibold text-blue-950">Formularz kontaktowy</h2>
          <div className="-ml-8 mb-8 mt-4 h-1 w-16 bg-amber-500"></div>
          <ContactForm />
        </div>
      </div>
      <div className="mt-6 w-full bg-white p-8 shadow">
        <Map />
      </div>
    </div>
  );
};

export default Contact;
