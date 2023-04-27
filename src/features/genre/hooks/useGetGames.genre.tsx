import { useContext, useMemo } from "react";
import { useRouter } from "next/router";
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
  const router = useRouter();
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
      enabled: router.query.name !== undefined,
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
        const filter = Object.keys(result).reduce((acc, key) => {
          return { ...acc, [key]: result[key] };
        }, {});
        const filteredGenre = Object.fromEntries(
          Object.entries(filter).filter(([key]) =>
            key.includes(String(router.query.name))
          )
        ) as any;

        dispatch({
          type: GenreActionEnum.AddGameData,
          payload: filteredGenre,
        });
      },
    }
  );

  return query;
};
