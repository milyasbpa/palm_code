import axios from "axios";
import { getTopRatingURL } from "@/core/routers";

export const fetchGetTopRating = async () => {
  const url = `${process.env.NEXT_PUBLIC_WEB_URL}${getTopRatingURL()}`;

  return await axios
    .get(url)
    .then((res: any) => {
      return res.data;
    })
    .catch((err) => {
      throw err?.response?.data;
    });
};
