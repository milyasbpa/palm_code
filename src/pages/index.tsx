import * as React from "react";

import HeaderComponent from "@/core/ui/components/header/Header.component";
import ListGameContainer from "@/features/home/containers/List.game";
import { GamesHomeProvider } from "@/features/home/contexts/GamesHome.context";

export interface HomePageProps {}

export default function HomePage(props: HomePageProps) {
  const header = {
    title: "Home | Games",
    description: "Home Games",
  };
  return (
    <GamesHomeProvider>
      <HeaderComponent title={header.title} description={header.description} />
      <ListGameContainer />
    </GamesHomeProvider>
  );
}
