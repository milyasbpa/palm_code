import { GetGamesPayloadRequestInterface } from "@/core/models/api";

export const DeveloperReactQueryKey = {
  GetGames(payload?: GetGamesPayloadRequestInterface) {
    return ["DevelopersReactQueryKey.GetGames", [payload] as const];
  },
};
