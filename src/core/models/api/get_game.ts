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
  status: string;
  short_description: string;
  description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
  minimum_system_requirements: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
  screenshots: {
    id: number;
    image: string;
  }[];
}

export interface GetGameErrorResponseInterface {
  error_code: string;
  message: string;
}
