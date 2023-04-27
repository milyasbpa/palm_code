import * as React from "react";

import HeaderComponent from "@/core/ui/components/header/Header.component";
import ListGenreContainer from "@/features/genre/containers/List.genre";
import { GenreProvider } from "@/features/genre/contexts/Genre.context";

export interface GenrePageProps {}

export default function GenrePage(props: GenrePageProps) {
  const header = {
    title: "Game",
    description: "Game",
  };
  return (
    <GenreProvider>
      <HeaderComponent title={header.title} description={header.description} />
      <ListGenreContainer />
    </GenreProvider>
  );
}
