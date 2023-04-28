import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import ItemCardGames from "@/features/home/components/item_card/ItemCard.games";
import { GenresContext } from "../../contexts/Genres.context";
import { useGenresGetGames } from "../../hooks/useGetGames.genres";
import { GenresActionEnum } from "../../contexts/Genres.types";
import { routeToGenre } from "@/core/routers";

export interface IItemsGenresProps {}

export default function ItemsGenres(props: IItemsGenresProps) {
  const { state, dispatch } = useContext(GenresContext);
  const { isFetching: isFetchingGetGames } = useGenresGetGames();
  const router = useRouter();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      const filter = Object.keys(state.games.raw)
        .filter((_, index) => index < state.games.pagination.offset + 4)
        .reduce((acc, key) => {
          return { ...acc, [key]: state.games.raw[key] };
        }, {});
      dispatch({
        type: GenresActionEnum.AddGameData,
        payload: { ...state.games.data, ...filter },
      });
    }
  }, [inView]);

  if (isFetchingGetGames) {
    return <div></div>;
  }

  const handleSeeMore = (e: React.MouseEvent<HTMLButtonElement>) => {
    router.push(routeToGenre(e.currentTarget.value));
  };

  return (
    <div
      className={clsx(
        "flex gap-[2rem]",
        "box-border max-w-[1200px]",
        "px-[1rem] sm:px-[0rem]"
      )}
    >
      <div className={clsx("grid grid-cols-1 gap-y-[2rem] w-full")}>
        {Object.keys(state.games.data).map((key) => (
          <div
            key={key}
            className={clsx(
              "grid grid-cols-1 justify-center justify-items-center content-start items-start",
              "gap-y-[1rem] w-full max-w-[75rem]"
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
                "grid justify-between justify-items-center",
                "gap-x-[1.25rem] gap-y-[1.25rem]",
                "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
              )}
            >
              {state.games.data[key]
                .filter((_, index) => index < 4)
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
