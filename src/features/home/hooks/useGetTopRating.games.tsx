import { useContext, useMemo } from "react";
import { GetTopRatingSuccessResponseInterface } from "@/core/models/api";
import { fetchGetTopRating } from "@/core/service/game";
import { useQuery } from "@tanstack/react-query";
import { GamesReactQueryKey } from "@/features/home/constants/react_query";
import { GamesHomeContext } from "@/features/home/contexts/GamesHome.context";
import { GamesHomeActionEnum } from "@/features/home/contexts/GamesHome.types";

export const useHomeGetTopRating = () => {
  const { state, dispatch } = useContext(GamesHomeContext);

  const query = useQuery<GetTopRatingSuccessResponseInterface[]>(
    GamesReactQueryKey.GetTopRating(),
    () => {
      return fetchGetTopRating();
    },
    {
      retry: 0,
      onSuccess(data) {
        dispatch({
          type: GamesHomeActionEnum.SetTopRatingData,
          payload: {
            ...state,
            data: data.map((game) => {
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
          },
        });
      },
    }
  );

  return query;
};
