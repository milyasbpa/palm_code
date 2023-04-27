import { GetGamesPayloadRequestInterface } from "@/core/models/api";

export const GenreReactQueryKey = {
  GetGames(payload?: GetGamesPayloadRequestInterface) {
    return ["GenreReactQueryKey.GetGenre", [payload] as const];
  },
};
