import * as React from "react";

import HeaderComponent from "@/core/ui/components/header/Header.component";
import ListGameContainer from "@/features/game/list/containers/List.game";

export interface HomePageProps {}

export default function HomePage(props: HomePageProps) {
  const header = {
    title: "Home | Games",
    description: "Home Games",
  };
  return (
    <>
      <HeaderComponent title={header.title} description={header.description} />
      <ListGameContainer />
    </>
  );
}
