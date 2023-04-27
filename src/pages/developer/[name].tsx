import * as React from "react";

import HeaderComponent from "@/core/ui/components/header/Header.component";
import { DeveloperProvider } from "@/features/developer/contexts/Developer.context";
import ListDeveloperContainer from "@/features/developer/containers/List.developer";

export interface GenrePageProps {}

export default function GenrePage(props: GenrePageProps) {
  const header = {
    title: "Game",
    description: "Game",
  };
  return (
    <DeveloperProvider>
      <HeaderComponent title={header.title} description={header.description} />
      <ListDeveloperContainer />
    </DeveloperProvider>
  );
}
