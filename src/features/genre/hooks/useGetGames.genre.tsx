import { useContext, useMemo } from "react";
import {
  GetGamesPayloadRequestInterface,
  GetGamesSuccessResponseInterface,
} from "@/core/models/api";
import { fetchGetGames } from "@/core/service/game";
import { useQuery } from "@tanstack/react-query";
import { GenreActionEnum } from "../contexts/Genre.types";
import { GenreContext } from "../contexts/Genre.context";
import { GenreReactQueryKey } from "../constants/react_query";

export const useGenreGetGames = () => {
  const { state, dispatch } = useContext(GenreContext);
  const payload: GetGamesPayloadRequestInterface = useMemo(() => {
    return {
      params: {
        ["sort-by"]: "release-date",
      },
    };
  }, []);

  const query = useQuery<GetGamesSuccessResponseInterface[]>(
    GenreReactQueryKey.GetGames(payload),
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
      },
    }
  );

  return query;
};
