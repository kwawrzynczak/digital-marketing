const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form className="flex flex-col gap-1">
        <label>Imię i nazwisko</label>
        <input type="text" maxLength={50} className="px-2 py-1.5" />
        <label>Numer telefonu</label>
        <input type="text" maxLength={12} className="px-2 py-1.5" />
        <label>Email</label>
        <input type="email" maxLength={50} className="px-2 py-1.5" />
        <label>Treść wiadomości</label>
        <textarea className="h-44 resize-none px-3 py-2" />
        <div className="mt-2 flex gap-2">
          <input type="checkbox" className="ml-1 mr-1 mt-2" />
          <label className="text-sm">
            Wyrażam zgodę na przetwarzanie moich danych osobowych w celu udzielenia odpowiedzi na
            przesłane przeze mnie zapytanie.
          </label>
        </div>
        <input
          type="submit"
          onSubmit={(e) => handleSubmit(e)}
          value="Wyślij"
          className="mt-6 w-44 cursor-pointer self-center rounded-lg bg-amber-500 p-3 font-bold tracking-wide text-white transition-all duration-200 hover:bg-amber-600"
        />
      </form>
    </>
  );
};

export default ContactForm;
