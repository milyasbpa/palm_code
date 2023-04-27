import { GetGamesPayloadRequestInterface } from "@/core/models/api";
import axios from "axios";
import { getGamesURL } from "@/core/routers";

export const fetchGetGames = async (
  payload?: GetGamesPayloadRequestInterface
) => {
  const url = `${process.env.NEXT_PUBLIC_WEB_URL}${
    process.env.NEXT_PUBLIC_PROXY_API
  }${getGamesURL()}`;

  return await axios
    .get(url, {
      params: payload?.params,
    })
    .then((res: any) => {
      return res.data;
    })
    .catch((err) => {
      throw err?.response?.data;
    });
};
