import { useContext, useMemo } from "react";
import {
  GetGamesPayloadRequestInterface,
  GetGamesSuccessResponseInterface,
} from "@/core/models/api";
import { fetchGetGames } from "@/core/service/game";
import { useQuery } from "@tanstack/react-query";
import { GenresActionEnum } from "../contexts/Genres.types";
import { GenresContext } from "../contexts/Genres.context";
import { GenresReactQueryKey } from "../constants/react_query";

export const useGenresGetGames = () => {
  const { state, dispatch } = useContext(GenresContext);
  const payload: GetGamesPayloadRequestInterface = useMemo(() => {
    return {
      params: {
        ["sort-by"]: "release-date",
      },
    };
  }, []);

  const query = useQuery<GetGamesSuccessResponseInterface[]>(
    GenresReactQueryKey.GetGames(payload),
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
          .filter((_, index) => index < 4)
          .reduce((acc, key) => {
            return { ...acc, [key]: result[key] };
          }, {});

        dispatch({
          type: GenresActionEnum.AddGameData,
          payload: filter,
        });
        dispatch({
          type: GenresActionEnum.SetRawData,
          payload: result,
        });
      },
    }
  );

  return query;
};
