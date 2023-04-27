// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getGamesURL } from "@/core/routers";
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const url = `${process.env.NEXT_PUBLIC_WEB_URL}${
    process.env.NEXT_PUBLIC_PROXY_API
  }${getGamesURL()}`;

  await axios
    .get(url, {
      params: {
        "sort-by": "popularity",
      },
    })
    .then((response: any) => {
      return res
        .status(200)
        .json(response.data.filter((item: any, index: number) => index < 10));
    })
    .catch((err) => {
      throw err?.response?.data;
    });
}
