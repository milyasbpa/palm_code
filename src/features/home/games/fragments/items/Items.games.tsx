import { useContext, useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import { useQueryClient } from "@tanstack/react-query";
import ItemCardGames from "@/features/home/games/components/item_card/ItemCard.games";
import { useHomeGetGames } from "@/features/home/games/hooks/useGetGames.games";
import { GamesHomeContext } from "../../contexts/GamesHome.context";
import { GamesHomeActionEnum } from "../../contexts/GamesHome.types";
import { GamesReactQueryKey } from "../../constants/react_query";
import {
  GetGamesPayloadRequestInterface,
  GetGamesSuccessResponseInterface,
} from "@/core/models/api";

export interface IItemsGamesProps {}

export default function ItemsGames(props: IItemsGamesProps) {
  const { state, dispatch } = useContext(GamesHomeContext);
  const { data: games, isFetching: isFetchingGetGames } = useHomeGetGames();

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
      dispatch({
        type: GamesHomeActionEnum.AddGameData,
        payload: (
          queryClient.getQueryData(
            GamesReactQueryKey.GetGames(payload)
          ) as GetGamesSuccessResponseInterface[]
        )
          .filter(
            (_, index) =>
              index > state.games.data.length &&
              index <= state.games.pagination.offset
          )
          .map((game) => {
            return {
              id: game.id,
              title: game.title,
              thumbnail: game.thumbnail,
              short_description: game.short_description,
              game_url: game.game_url,
              genre: game.genre,
              platform: game.platform,
              publisher: game.publisher,
              developer: game.developer,
              release_date: game.release_date,
              freetogame_profile_url: game.freetogame_profile_url,
            };
          }),
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
            {state.games.data?.map((game) => (
              <ItemCardGames
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
        <div ref={ref} className={clsx("hidden")}>
          {"bottom"}
        </div>
      </div>
    </div>
  );
}
