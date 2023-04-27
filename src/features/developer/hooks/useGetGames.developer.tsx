import { useContext, useMemo } from "react";
import { useRouter } from "next/router";
import {
  GetGamesPayloadRequestInterface,
  GetGamesSuccessResponseInterface,
} from "@/core/models/api";
import { fetchGetGames } from "@/core/service/game";
import { useQuery } from "@tanstack/react-query";
import { DevelopersActionEnum } from "@/features/developers/contexts/Developers.types";
import { DevelopersContext } from "@/features/developers/contexts/Developers.context";
import { DeveloperReactQueryKey } from "../constants/react_query";

export const useDevelopersGetGames = () => {
  const { state, dispatch } = useContext(DevelopersContext);
  const router = useRouter();
  const payload: GetGamesPayloadRequestInterface = useMemo(() => {
    return {
      params: {
        ["sort-by"]: "release-date",
      },
    };
  }, []);

  const query = useQuery<GetGamesSuccessResponseInterface[]>(
    DeveloperReactQueryKey.GetGames(payload),
    () => {
      return fetchGetGames(payload);
    },
    {
      enabled: router.query.name !== undefined,
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

        const filteredDeveloper = Object.fromEntries(
          Object.entries(filter).filter(([key]) =>
            key.includes(String(router.query.name))
          )
        ) as any;

        dispatch({
          type: DevelopersActionEnum.AddGameData,
          payload: filteredDeveloper,
        });
      },
    }
  );

  return query;
};
