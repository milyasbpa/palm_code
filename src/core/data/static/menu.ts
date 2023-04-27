import { routeToDevelopers, routeToGenres, routeToHome } from "@/core/routers";

export const menu = [
  {
    name: "HOME",
    link: routeToHome(),
  },
  {
    name: "DEVELOPER",
    link: routeToDevelopers(),
  },
  {
    name: "GENRE",
    link: routeToGenres(),
  },
];
