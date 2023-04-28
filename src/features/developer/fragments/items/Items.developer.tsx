import { useContext } from "react";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

import { useDevelopersGetGames } from "@/features/developers/hooks/useGetGames.developers";
import ItemCardDeveloper from "../../components/item_card/ItemCard.developer";
import { DeveloperContext } from "../../contexts/Developer.context";

export interface IItemsGenreProps {}

const groupBy = (array: any, key: any) => {
  return array.reduce((hash: any, obj: any) => {
    if (obj[key] === undefined) return hash;
    return Object.assign(hash, {
      [obj[key]]: (hash[obj[key]] || []).concat(obj),
    });
  }, {});
};

export default function ItemsGenre(props: IItemsGenreProps) {
  const { state, dispatch } = useContext(DeveloperContext);
  const { isFetching: isFetchingGetGames } = useDevelopersGetGames();

  const { ref, inView } = useInView();

  if (isFetchingGetGames) {
    return <div />;
  }

  return (
    <div
      className={clsx(
        "flex gap-[2rem]",
        "box-border max-w-[1200px]",
        "px-[1rem] sm:px-[0rem]"
      )}
    >
      <div className={clsx("grid", "grid-cols-1", "w-full")}>
        {Object.keys(state.games.data).map((key) => (
          <div
            key={key}
            className={clsx(
              "grid grid-cols-1 justify-center justify-items-center content-start items-start",
              "gap-y-[3rem] w-full max-w-[75rem]"
            )}
          >
            <div
              className={clsx(
                "grid justify-start justify-items-start max-w-[75rem] w-full"
              )}
            >
              <p
                className={clsx(
                  "text-[0.75rem] sm:text-[1rem]",
                  "font-bold",
                  "text-independence"
                )}
              >
                {key}
              </p>
            </div>

            <div
              className={clsx(
                "grid justify-center justify-items-center",
                "max-w-[75rem] gap-x-[1.25rem] gap-y-[1.25rem]",
                "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
              )}
            >
              {state.games.data[key]
                .filter((_, i) => i < 4)
                .map((game) => (
                  <ItemCardDeveloper
                    key={game.id}
                    id={game.id}
                    title={game.title}
                    short_description={game.short_description}
                    publisher={game.publisher}
                    release_date={game.release_date}
                    developer={game.developer}
                    platform={game.platform}
                  />
                ))}
            </div>
          </div>
        ))}

        <div ref={ref} className={clsx("opacity-0")}>
          {"bottom"}
        </div>
      </div>
    </div>
  );
}
