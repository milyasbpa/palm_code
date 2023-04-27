import { useContext, useMemo } from "react";
import {
  GetGamesPayloadRequestInterface,
  GetGamesSuccessResponseInterface,
} from "@/core/models/api";
import { fetchGetGames } from "@/core/service/game";
import { useQuery } from "@tanstack/react-query";
import { GamesReactQueryKey } from "@/features/home/games/constants/react_query";
import { DevelopersActionEnum } from "@/features/developers/contexts/Developers.types";
import { DevelopersContext } from "@/features/developers/contexts/Developers.context";

export const useDevelopersGetGames = () => {
  const { state, dispatch } = useContext(DevelopersContext);
  const payload: GetGamesPayloadRequestInterface = useMemo(() => {
    return {
      params: {
        ["sort-by"]: "release-date",
      },
    };
  }, []);

  const query = useQuery<GetGamesSuccessResponseInterface[]>(
    GamesReactQueryKey.GetGames(payload),
    () => {
      return fetchGetGames(payload);
    },
    {
      retry: 0,
      onSuccess(data) {
        const groupBy = (array: any, key: any) => {
          return array.reduce((hash: any, obj: any) => {
            if (obj[key] === undefined) return hash;
            return Object.assign(hash, {
              [obj[key]]: (hash[obj[key]] || []).concat(obj),
            });
          }, {});
        };

        const result = groupBy(data, "developer");
        const filter = Object.keys(result)
          .filter((_, index) => index < state.games.pagination.offset + 5)
          .reduce((acc, key) => {
            return { ...acc, [key]: result[key] };
          }, {});

        dispatch({
          type: DevelopersActionEnum.AddGameData,
          payload: filter,
        });
      },
    }
  );

  return query;
};
