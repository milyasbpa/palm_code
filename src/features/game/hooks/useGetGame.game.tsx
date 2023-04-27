import { useContext, useMemo } from "react";
import { useRouter } from "next/router";
import {
  GetGamePayloadRequestInterface,
  GetGameSuccessResponseInterface,
} from "@/core/models/api";
import { fetchGetGame } from "@/core/service/game";
import { useQuery } from "@tanstack/react-query";
import { GameActionEnum } from "../contexts/Game.types";
import { GameContext } from "../contexts/Game.context";
import { GameReactQueryKey } from "../constants/react_query";

export const useGameGetGame = () => {
  const { state, dispatch } = useContext(GameContext);
  const router = useRouter();
  const payload: GetGamePayloadRequestInterface = useMemo(() => {
    return {
      params: {
        ["id"]: router.query?.id,
      },
    };
  }, [router.query.id]);

  const query = useQuery<GetGameSuccessResponseInterface>(
    GameReactQueryKey.GetGame(payload),
    () => {
      return fetchGetGame(payload);
    },
    {
      enabled: router.query.id !== undefined,
      retry: 0,
      onSuccess(data) {
        dispatch({
          type: GameActionEnum.SetGameData,
          payload: {
            ...state.game,
            data: {
              id: data.id,
              title: data.title,
              thumbnail: data.thumbnail,
              short_description: data.short_description,
              game_url: data.game_url,
              genre: data.genre,
              platform: data.platform,
              publisher: data.publisher,
              developer: data.developer,
              release_date: data.release_date,
              freetogame_profile_url: data.freetogame_profile_url,
            },
          },
        });
      },
    }
  );

  return query;
};
