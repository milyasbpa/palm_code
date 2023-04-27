import * as React from "react";

import HeaderComponent from "@/core/ui/components/header/Header.component";
import { GameProvider } from "@/features/game/contexts/Game.context";
import ItemGameContainer from "@/features/game/containers/item.game";

export interface GamePageProps {}

export default function GamePage(props: GamePageProps) {
  const header = {
    title: "Game",
    description: "Game",
  };
  return (
    <GameProvider>
      <HeaderComponent title={header.title} description={header.description} />
      <ItemGameContainer />
    </GameProvider>
  );
}
