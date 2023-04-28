import { useContext, useMemo, useEffect } from "react";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import ItemCardGames from "@/features/home/components/item_card/ItemCard.games";
import { DevelopersContext } from "@/features/developers/contexts/Developers.context";
import { useDevelopersGetGames } from "@/features/developers/hooks/useGetGames.developers";
import { DevelopersActionEnum } from "@/features/developers/contexts/Developers.types";
import { routeToDeveloper } from "@/core/routers";

export interface IItemsGenreProps {}

export default function ItemsGenre(props: IItemsGenreProps) {
  const { state, dispatch } = useContext(DevelopersContext);
  const router = useRouter();

  const { isFetching: isFetchingGetGames } = useDevelopersGetGames();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      const filter = Object.keys(state.games.raw)
        .filter((_, index) => index < state.games.pagination.offset + 4)
        .reduce((acc, key) => {
          return { ...acc, [key]: state.games.raw[key] };
        }, {});
      dispatch({
        type: DevelopersActionEnum.AddGameData,
        payload: filter,
      });
    }
  }, [inView]);

  if (isFetchingGetGames) {
    return <div></div>;
  }

  const handleSeeMore = (e: React.MouseEvent<HTMLButtonElement>) => {
    router.push(routeToDeveloper(e.currentTarget.value));
  };

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
                "grid grid-flow-col justify-between justify-items-start max-w-[75rem] w-full"
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

              {state.games.data[key].length > 4 && (
                <button
                  className={clsx(
                    "text-[0.75rem] sm:text-[1rem]",
                    "font-semibold",
                    "text-primary"
                  )}
                  value={key}
                  onClick={handleSeeMore}
                >
                  {"See More"}
                </button>
              )}
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
                  <ItemCardGames
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
