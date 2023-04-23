import { NextApiRequest, NextApiResponse } from "next";

export interface GetGamesRequestInterface
  extends NextApiRequest,
    GetGamesPayloadRequestInterface {}

export interface GetGamesPayloadRequestInterface {
  params?: GetGamesParamsRequestInterface;
}

export interface GetGamesPathRequestInterface {
  platform?: string;
  category?: string;
  tag?: string;
  ["sort-by"]?: string;
}

export interface GetGamesParamsRequestInterface {}
export interface GetGamesResponseInterface
  extends NextApiResponse<
    GetGamesSuccessResponseInterface | GetGamesErrorResponseInterface
  > {}
export interface GetGamesSuccessResponseInterface {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
}

export interface GetGamesErrorResponseInterface {
  error_code: string;
  message: string;
}
