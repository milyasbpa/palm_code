import { NextApiRequest, NextApiResponse } from "next";

export interface GetTopRatingRequestInterface
  extends NextApiRequest,
    GetTopRatingPayloadRequestInterface {}

export interface GetTopRatingPayloadRequestInterface {
  params?: GetTopRatingParamsRequestInterface;
}

export interface GetTopRatingPathRequestInterface {
  platform?: string;
  category?: string;
  tag?: string;
  ["sort-by"]?: string;
}

export interface GetTopRatingParamsRequestInterface {}
export interface GetTopRatingResponseInterface
  extends NextApiResponse<
    GetTopRatingSuccessResponseInterface | GetTopRatingErrorResponseInterface
  > {}
export interface GetTopRatingSuccessResponseInterface {
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

export interface GetTopRatingErrorResponseInterface {
  error_code: string;
  message: string;
}
