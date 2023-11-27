import { Disclosure, Transition } from '@headlessui/react';

const FaqTab = ({ question, answer }) => {
  return (
    <Disclosure>
      <Disclosure.Button className="w-full border-b bg-white p-8 text-left text-lg font-semibold text-blue-950">
        <span className="text-xl font-bold text-amber-500">&gt; </span>
        {question}
      </Disclosure.Button>
      <Transition
        className="w-full"
        enter="transition duration-500 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-500 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Disclosure.Panel className="w-full bg-white p-8 text-left text-lg text-blue-950">
          {answer}
        </Disclosure.Panel>
      </Transition>
      <div className="h-6"></div>
    </Disclosure>
  );
};

export default FaqTab;
