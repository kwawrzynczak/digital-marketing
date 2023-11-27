// import Map from '../components/Map';

import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div>
      <h1 className="mb-20 text-center text-4xl font-bold text-blue-950">Kontakt</h1>
      <div className="grid h-64 grid-cols-2 gap-6 place-self-center">
        <div className="row-span-2 w-full bg-white p-6 shadow">
          <h2 className="text-3xl font-semibold text-blue-950">Dane kontaktowe</h2>
          <div className="">
            <h3>Aquapark Falka</h3>
          </div>
          <div className="">
            <h3>Aqua Spa & Sauna</h3>
          </div>
          <div className="">
            <h3>Aqua Fit</h3>
          </div>
        </div>
        <div className="bg-white p-6 shadow">
          <h2 className="text-3xl font-semibold text-blue-950">Formularz kontaktowy</h2>
          <ContactForm />
        </div>
        <div className="bg-white p-6 shadow">{/* <Map /> */}Content</div>
      </div>
    </div>
  );
};

export default Contact;
