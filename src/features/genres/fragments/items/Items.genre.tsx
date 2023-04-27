import { useContext, useMemo, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import { useQueryClient } from "@tanstack/react-query";
import ItemCardGames from "@/features/home/games/components/item_card/ItemCard.games";
import { GenreContext } from "../../contexts/Genre.context";
import {
  GetGamesPayloadRequestInterface,
  GetGamesSuccessResponseInterface,
} from "@/core/models/api";
import { useGenreGetGames } from "../../hooks/useGetGames.genre";
import { GenreActionEnum } from "../../contexts/Genre.types";
import { GenreReactQueryKey } from "../../constants/react_query";

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
  const { state, dispatch } = useContext(GenreContext);
  const { data: games, isFetching: isFetchingGetGames } = useGenreGetGames();

  const { ref, inView } = useInView();
  const queryClient = useQueryClient();
  const payload: GetGamesPayloadRequestInterface = useMemo(() => {
    return {
      params: {
        ["sort-by"]: "release-date",
      },
    };
  }, []);

  console.log(inView, "ini in view");

  useEffect(() => {
    if (inView) {
      console.log("inview");
      const data = groupBy(
        queryClient.getQueryData(
          GenreReactQueryKey.GetGames(payload)
        ) as GetGamesSuccessResponseInterface[],
        "genre"
      );
      const result = groupBy(data, "genre");
      const filter = Object.keys(result)
        .filter((_, index) => index < state.games.pagination.offset + 4)
        .reduce((acc, key) => {
          return { ...acc, [key]: result[key] };
        }, {});
      dispatch({
        type: GenreActionEnum.AddGameData,
        payload: filter,
      });
    }
  }, [inView]);

  if (isFetchingGetGames) {
    return (
      <div
        className={clsx(
          "flex gap-[2rem]",
          "box-border max-w-[1200px]",
          "px-[1rem] sm:px-[0rem]"
        )}
      >
        <div className={clsx("grid", "grid-cols-1", "w-full")}>
          <div
            className={clsx(
              "grid grid-cols-1 justify-center content-start justify-items-center",
              "gap-y-[3rem] w-full"
            )}
          >
            <div
              className={clsx(
                "grid justify-center justify-items-center",
                "max-w-[75rem] gap-x-[1.25rem] gap-y-[1.25rem]",
                "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
              )}
            >
              {/* skeleton */}
              {/* {state.games.data?.map((game) => (
            <ItemCardGames
              id={game.id}
              title={game.title}
              short_description={game.short_description}
              publisher={game.publisher}
              release_date={game.release_date}
              developer={game.developer}
              platform={game.platform}
            />
          ))} */}
            </div>
          </div>
        </div>
      </div>
    );
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
