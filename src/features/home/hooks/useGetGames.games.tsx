import { useContext, useMemo } from "react";
import {
  GetGamesPayloadRequestInterface,
  GetGamesSuccessResponseInterface,
} from "@/core/models/api";
import { fetchGetGames } from "@/core/service/game";
import { useQuery } from "@tanstack/react-query";
import { GamesReactQueryKey } from "@/features/home/constants/react_query";
import { GamesHomeContext } from "@/features/home/contexts/GamesHome.context";
import { GamesHomeActionEnum } from "@/features/home/contexts/GamesHome.types";

export const useHomeGetGames = () => {
  const { state, dispatch } = useContext(GamesHomeContext);
  const payload: GetGamesPayloadRequestInterface = useMemo(() => {
    return {
      params: {
        ["sort-by"]: state.games.sort_by.name,
        category:
          state.games.category.name === "All Categories"
            ? undefined
            : state.games.category.name,
        platform: state.games.platform.name,
      },
    };
  }, [
    state.games.sort_by.name,
    state.games.category.name,
    state.games.platform.name,
  ]);

  const query = useQuery<GetGamesSuccessResponseInterface[]>(
    GamesReactQueryKey.GetGames(payload),
    () => {
      return fetchGetGames(payload);
    },
    {
      retry: 0,
      onSuccess(data) {
        dispatch({
          type: GamesHomeActionEnum.AddGameData,
          payload: data
            .filter((_, index) => index < state.games.pagination.offset + 10)
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
        dispatch({
          type: GamesHomeActionEnum.SetRawData,
          payload: data,
        });
      },
    }
  );

  return query;
};
