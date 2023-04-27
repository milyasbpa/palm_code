import { Fragment, useState } from "react";
import clsx from "clsx";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

interface IAutocompleteGames {
  label?: string;
  options?: { id: number; name: string }[];
  onSelect?: (data: { id: number; name: string }) => void;
}

AutocompleteGames.defaultProps = {
  label: "",
  options: [],
};

export default function AutocompleteGames(props: IAutocompleteGames) {
  const [selected, setSelected] = useState(
    props.options ? props.options[0] : []
  );
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? props.options
      : props.options?.filter((option) =>
          option.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const handleSelect = (data: { id: number; name: string }) => {
    setSelected(data);
    if (props.onSelect) {
      props.onSelect(data);
    }
  };

  return (
    <div
      className={clsx(
        "grid grid-cols-1 w-full gap-y-[0.5rem] place-content-start place-items-start"
      )}
    >
      <p className={clsx("text-[1rem] text-dark-charcoal font-bold")}>
        {props.label}
      </p>
      <Combobox value={selected} onChange={handleSelect}>
        <div className={clsx("relative mt-1 w-full")}>
          <div
            className={clsx(
              "relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"
            )}
          >
            <Combobox.Input
              className={clsx(
                "w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 outline-none"
              )}
              displayValue={(person: { id: number; name: string }) =>
                person.name
              }
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button
              className={clsx(
                "absolute inset-y-0 right-0 flex items-center pr-2"
              )}
            >
              <ChevronUpDownIcon
                className={clsx("h-5 w-5 text-gray-400")}
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave={clsx("transition ease-in duration-100")}
            leaveFrom={clsx("opacity-100")}
            leaveTo={clsx("opacity-0")}
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options
              className={clsx(
                "absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              )}
            >
              {filteredPeople?.length === 0 && query !== "" ? (
                <div
                  className={clsx(
                    "relative cursor-default select-none py-2 px-4 text-gray-700"
                  )}
                >
                  {"Nothing found."}
                </div>
              ) : (
                filteredPeople?.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-primary text-white" : "text-gray-900"
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={clsx(
                            `block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`
                          )}
                        >
                          {person.name}
                        </span>
                        {selected ? (
                          <span
                            className={clsx(
                              `absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? "text-white" : "text-teal-600"
                              }`
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
