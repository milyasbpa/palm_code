import * as React from "react";
import clsx from "clsx";
import { useRouter } from "next/router";
import { routeToGame } from "@/core/routers";

export interface IItemCardDevelopersProps {
  id?: number;
  title?: string;
  thumbnail?: string;
  short_description?: string;
  game_url?: string;
  genre?: string;
  platform?: string;
  publisher?: string;
  developer?: string;
  release_date?: string;
  freetogame_profile_url?: string;
  onClickItem?: (id: number) => void;
}

ItemCardDevelopers.defaultProps = {
  id: -1,
  title: "Overwatch 2",
  thumbnail: "https://www.freetogame.com/g/540/thumbnail.jpg",
  short_description:
    "A hero-focused first-person team shooter from Blizzard Entertainment.",
  game_url: "https://www.freetogame.com/open/overwatch-2",
  genre: "Shooter",
  platform: "PC (Windows)",
  publisher: "Activision Blizzard",
  developer: "Blizzard Entertainment",
  release_date: "2022-10-04",
  freetogame_profile_url: "https://www.freetogame.com/overwatch-2",
};

export default function ItemCardDevelopers(props: IItemCardDevelopersProps) {
  const router = useRouter();
  const handleClickItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    router.push(routeToGame(parseInt(e.currentTarget.value)));
    e.stopPropagation();
    if (props.onClickItem) {
      props.onClickItem(parseInt(e.currentTarget.title));
    }
  };

  return (
    <button
      className={clsx(
        "flex",
        "flex-col gap-[0.625rem] sm:gap-y-[1rem] justify-between",
        "w-full",
        "p-[0.625rem] sm:p-4 rounded-2xl",
        "shadow-1",
        "bg-white",
        "cursor-pointer"
      )}
      value={props.id}
      onClick={handleClickItem}
    >
      <div
        className={clsx(
          "grid",
          "gap-y-[0.625rem] sm:gap-y-[1rem] items-start content-start"
        )}
      >
        <img
          src={props.thumbnail}
          loading={"lazy"}
          className={clsx("object-cover rounded-lg", "w-full h-[120px]")}
        />

        <div className={clsx("grid gap-y-[0.25rem] items-start content-start")}>
          <p className={clsx("text-[0.875rem] text-primary font-regular")}>
            {props.publisher}
          </p>
          <p className={clsx("text-[1.25rem] text-dark-charcoal font-bold")}>
            {props.title}
          </p>

          <p
            className={clsx("text-[0.75rem] text-charleston-green font-normal")}
          >
            {props.short_description}
          </p>
          <p className={clsx("text-[1rem] text-charleston-green font-bold")}>
            {props.genre}
          </p>

          <p
            className={clsx(
              "text-[0.875rem] text-charleston-green font-normal"
            )}
          >
            {`by: ${props.developer}`}
          </p>

          <div className={clsx("flex items-center justify-between w-full")}>
            <p
              className={clsx(
                "text-[0.875rem] text-charleston-green font-medium"
              )}
            >
              {props.platform}
            </p>

            <p
              className={clsx(
                "text-[0.75rem] text-charleston-green font-normal"
              )}
            >
              {props.release_date}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
}
