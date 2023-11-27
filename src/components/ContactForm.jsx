const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form className="flex flex-col gap-1">
        <label>Imię i nazwisko</label>
        <input type="text" maxLength={50} className="px-2 py-1.5" />
        <label>Email</label>
        <input type="email" maxLength={50} className="px-2 py-1.5" />
        <label>Tytuł opinii</label>
        <input type="text" maxLength={255} className="px-2 py-1.5" />
        <label>Napisz swoją opinię</label>
        <textarea className="h-44 resize-none px-3 py-2" />
        <input
          type="submit"
          onSubmit={(e) => handleSubmit(e)}
          value="Dodaj opinię"
          className="mt-6 w-44 cursor-pointer self-center rounded-lg bg-amber-500 p-3 font-bold tracking-wide text-white transition-all duration-200 hover:bg-amber-600"
        />
      </form>
    </>
  );
};

export default ContactForm;
