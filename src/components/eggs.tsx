import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const options = [
  {
    name: 'Frito',
  },
  {
    name: 'Mexido',
  },
  {
    name: 'Omelete',
  },
];

export default function Eggs(): JSX.Element {
  const [active, setActive] = useState<string>('Frito');

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="flex items-center justify-evenly border-b border-slate-100 p-1">
        {options.map((item) => {
          return (
            <button
              className={
                active === item.name
                  ? 'py-1 px-4 rounded-full bg-orange-100 border-2 border-orange-600 text-xs font-medium text-orange-600'
                  : 'py-1 px-4 rounded-full bg-slate-100 border-2 border-slate-100 text-xs text-slate-600 hover:border-amber-600 hover:bg-orange-100 hover:text-orange-600'
              }
              onClick={() => setActive(item.name)}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      <div className="w-full">
        {active === 'Frito' ? <FriedEgg /> : false}
        {active === 'Mexido' ? <ScrambledEggs /> : false}
        {active === 'Omelete' ? <Omelet /> : false}
      </div>
    </div>
  );
}

function FriedEgg(): JSX.Element {
  const people = [
    {
      id: 0,
      name: 'Torrada',
    },
    {
      id: 1,
      name: 'Torrada Simples',
    },
    {
      id: 2,
      name: 'Torrada com Manteiga',
    },
    {
      id: 3,
      name: 'Torrada com Requeijão',
    },
  ];
  const amounts = [
    {
      name: '1',
      value: 1,
    },
    {
      name: '2',
      value: 2,
    },
    {
      name: '3',
      value: 3,
    },
    {
      name: '4',
      value: 4,
    },
  ];
  const [amount, setAmount] = useState<number>();
  const [selected, setSelected] = useState(people[3]);

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="w-full flex flex-col items-start gap-8 mt-5">
      <div className="flex items-center gap-3">
        <strong>Quantidade:</strong>
        <span className="w-1 h-10 bg-slate-200"></span>
        <div className="w-full flex items-center gap-3">
          {amounts.map((item) => {
            return (
              <button
                className={
                  item.value === amount
                    ? 'flex items-center justify-center py-2 px-4 rounded-full text-base font-semibold text-orange-500 border-2 border-orange-500'
                    : 'flex items-center justify-center py-2 px-4 rounded-full text-base font-semibold text-slate-200 border-2 border-slate-200 hover:border-slate-300 hover:text-slate-300'
                }
                onClick={() => setAmount(item.value)}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <strong>Acompanhamentos:</strong>
        <span className="w-1 h-10 bg-slate-200"></span>
        <div className="w-52">
          <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
              <>
                <div className="relative mt-2">
                  <Listbox.Button className="relative w-full cursor-default rounded-full bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:text-sm sm:leading-6">
                    <span className="flex items-center">
                      <span className="ml-3 block truncate">
                        {selected.name}
                      </span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {people.map((person) => (
                        <Listbox.Option
                          key={person.id}
                          className={({ active }) =>
                            classNames(
                              active
                                ? 'bg-gray-200 text-white'
                                : 'text-gray-900',
                              'relative cursor-default select-none py-2 pl-3 pr-9'
                            )
                          }
                          value={person}
                        >
                          {({ selected, active }) => (
                            <>
                              <div className="flex items-center">
                                <span
                                  className={classNames(
                                    selected ? 'font-semibold' : 'font-normal',
                                    'ml-3 block truncate'
                                  )}
                                >
                                  {person.name}
                                </span>
                              </div>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? 'text-white' : 'text-indigo-600',
                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
        </div>
      </div>
    </div>
  );
}

function ScrambledEggs() {
  return <h1>Mexido Page</h1>;
}

function Omelet() {
  return <h1>Omelete Page</h1>;
}
