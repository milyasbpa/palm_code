import { useContext, useMemo, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import { useQueryClient } from "@tanstack/react-query";
import ItemCardGames from "@/features/home/components/item_card/ItemCard.games";
import { GenresContext } from "../../contexts/Genres.context";
import {
  GetGamesPayloadRequestInterface,
  GetGamesSuccessResponseInterface,
} from "@/core/models/api";
import { useGenresGetGames } from "../../hooks/useGetGames.genres";
import { GenresActionEnum } from "../../contexts/Genres.types";
import { GenresReactQueryKey } from "../../constants/react_query";

export interface IItemsGenresProps {}

const groupBy = (array: any, key: any) => {
  return array.reduce((hash: any, obj: any) => {
    if (obj[key] === undefined) return hash;
    return Object.assign(hash, {
      [obj[key]]: (hash[obj[key]] || []).concat(obj),
    });
  }, {});
};

export default function ItemsGenres(props: IItemsGenresProps) {
  const { state, dispatch } = useContext(GenresContext);
  const { data: games, isFetching: isFetchingGetGames } = useGenresGetGames();

  const { ref, inView } = useInView();
  const queryClient = useQueryClient();
  const payload: GetGamesPayloadRequestInterface = useMemo(() => {
    return {
      params: {
        ["sort-by"]: "release-date",
      },
    };
  }, []);

  useEffect(() => {
    if (inView) {
      console.log("inview");
      const data = groupBy(
        queryClient.getQueryData(
          GenresReactQueryKey.GetGames(payload)
        ) as GetGamesSuccessResponseInterface[],
        "genres"
      );
      const result = groupBy(data, "genres");
      const filter = Object.keys(result)
        .filter((_, index) => index < state.games.pagination.offset + 4)
        .reduce((acc, key) => {
          return { ...acc, [key]: result[key] };
        }, {});
      dispatch({
        type: GenresActionEnum.AddGameData,
        payload: filter,
      });
    }
  }, [inView]);

  if (isFetchingGetGames) {
    return <div></div>;
  }

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
                <p
                  className={clsx(
                    "text-[0.75rem] sm:text-[1rem]",
                    "font-semibold",
                    "text-primary"
                  )}
                >
                  {"See More"}
                </p>
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

        <div ref={ref} className={clsx("hidden")}>
          {"bottom"}
        </div>
      </div>
    </div>
  );
}
