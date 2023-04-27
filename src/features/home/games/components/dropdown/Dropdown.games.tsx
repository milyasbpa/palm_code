import { Fragment, useState } from "react";
import clsx from "clsx";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const people = [
  { name: "all category" },
  { name: "mmorpg" },
  { name: "shooter" },
  { name: "strategy" },
  { name: "moba" },
  { name: "racing" },
  { name: "sports" },
  { name: "social" },
  { name: "sandbox" },
  { name: "open-world" },
  { name: "survival" },
  { name: "pvp" },
  { name: "pve" },
  { name: "pixel" },
  { name: "voxel" },
  { name: "zombie" },
  { name: "turn-based" },
  { name: "first-person" },
  { name: "third-Person" },
  { name: "top-down" },
  { name: "tank" },
  { name: "space" },
  { name: "sailing" },
  { name: "side-scroller" },
  { name: "superhero" },
  { name: "permadeath" },
  { name: "card" },
  { name: "battle-royale" },
  { name: "mmo" },
  { name: "mmofps" },
  { name: "mmotps" },
  { name: "3d" },
  { name: "2d" },
  { name: "anime" },
  { name: "fantasy" },
  { name: "sci-fi" },
  { name: "fighting" },
  { name: "action-rpg" },
  { name: "action" },
  { name: "military" },
  { name: "martial-arts" },
  { name: "flight" },
  { name: "low-spec" },
  { name: "tower-defense" },
  { name: "horror" },
  { name: "mmorts" },
];

interface IDropdownGames {
  onSelect?: (data: { name: string }) => void;
}

DropdownGames.defaultProps = {};

export default function DropdownGames(props: IDropdownGames) {
  const [selected, setSelected] = useState(people[0]);

  const handleSelect = (data: { name: string }) => {
    setSelected(data);
    if (props.onSelect) {
      props.onSelect(data);
    }
  };
  return (
    <div>
      <Listbox value={selected} onChange={handleSelect}>
        <div className={clsx("relative")}>
          <Listbox.Button
            className={clsx(
              "relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
            )}
          >
            <span className={clsx("block truncate")}>{selected.name}</span>
            <span
              className={clsx(
                "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
              )}
            >
              <ChevronUpDownIcon
                className={clsx("h-5 w-5 text-gray-400")}
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave={clsx("transition ease-in duration-100")}
            leaveFrom={clsx("opacity-100")}
            leaveTo={clsx("opacity-0")}
          >
            <Listbox.Options
              className={clsx(
                "absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              )}
            >
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span
                          className={clsx(
                            "absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                          )}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
