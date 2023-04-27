import * as React from "react";
import clsx from "clsx";
import AppLayout from "@/core/ui/layouts/app/AppLayout";
import ListGameContainer from "@/features/home/games/containers/List.game";

export interface IGamesPageProps {}

export default function GamesPage(props: IGamesPageProps) {
  return <ListGameContainer />;
}
