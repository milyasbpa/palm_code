import * as React from "react";
import clsx from "clsx";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
export interface ISearchComponentProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

SearchComponent.defaultProps = {
  label: "",
};

export default function SearchComponent(props: ISearchComponentProps) {
  return (
    <div
      className={clsx(
        "grid",
        "w-full",
        "grid-cols-1 place-content-start place-items-start gap-y-[0.5rem]"
      )}
    >
      <p className={clsx("text-[1rem] text-dark-charcoal font-bold")}>
        {props.label}
      </p>

      <div
        className={clsx(
          "flex w-full items-center justify-between",
          "rounded-[0.5rem] bg-lotion px-[1rem] py-[0.5rem] outline-0 bg-white"
        )}
      >
        <input
          className={clsx(
            "w-full bg-lotion",
            "outline-0",
            "text-sm leading-[normal] text-auro-metal-saurus placeholder:text-[rgba(154,168,184,1)]"
          )}
          {...props}
        />

        <MagnifyingGlassIcon
          className={clsx("h-[1.25rem] w-[1.25rem]", "fill-philippine-gray")}
        />
      </div>
    </div>
  );
}
