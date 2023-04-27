import { GetGamesPayloadRequestInterface } from "@/core/models/api";

export const GamesReactQueryKey = {
  GetGames(payload?: GetGamesPayloadRequestInterface) {
    return ["GamesReactQueryKey.GetGames", [payload] as const];
  },
  GetTopRating() {
    return ["GamesReactQueryKey.GetTopRating"];
  },
};
