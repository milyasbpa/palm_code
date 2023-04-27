import { GetGamesPayloadRequestInterface } from "@/core/models/api";
import axios from "axios";
import { getGameURL } from "@/core/routers";

export const fetchGetGame = async (
  payload?: GetGamesPayloadRequestInterface
) => {
  const url = `${process.env.NEXT_PUBLIC_WEB_URL}${
    process.env.NEXT_PUBLIC_PROXY_API
  }${getGameURL()}`;

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
