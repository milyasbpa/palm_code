import { GetGamesPayloadRequestInterface } from "@/core/models/api";

export const GenresReactQueryKey = {
  GetGames(payload?: GetGamesPayloadRequestInterface) {
    return ["GenreReactQueryKey.GetGenre", [payload] as const];
  },
};
