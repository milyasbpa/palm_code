import { GetGamePayloadRequestInterface } from "@/core/models/api";

export const GameReactQueryKey = {
  GetGame(payload?: GetGamePayloadRequestInterface) {
    return ["GameReactQueryKey.GetGame", [payload] as const];
  },
};
