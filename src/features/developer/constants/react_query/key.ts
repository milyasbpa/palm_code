import { GetGamesPayloadRequestInterface } from "@/core/models/api";

export const DevelopersReactQueryKey = {
  GetGames(payload?: GetGamesPayloadRequestInterface) {
    return ["DevelopersReactQueryKey.GetGames", [payload] as const];
  },
};
