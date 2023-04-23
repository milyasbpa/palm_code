import { NextApiRequest, NextApiResponse } from "next";

export interface GetGameRequestInterface
  extends NextApiRequest,
    GetGamePayloadRequestInterface {}

export interface GetGamePayloadRequestInterface {
  params?: GetGameParamsRequestInterface;
}

export interface GetGamePathRequestInterface {
  id: string;
}

export interface GetGameParamsRequestInterface {}
export interface GetGameResponseInterface
  extends NextApiResponse<
    GetGameSuccessResponseInterface | GetGameErrorResponseInterface
  > {}
export interface GetGameSuccessResponseInterface {
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

export interface GetGameErrorResponseInterface {
  error_code: string;
  message: string;
}
