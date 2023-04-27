import * as React from "react";

import HeaderComponent from "@/core/ui/components/header/Header.component";
import { GenreProvider } from "@/features/genres/contexts/Genre.context";
import ListGenreContainer from "@/features/genres/containers/List.genre";

export interface GenrePageProps {}

export default function GenrePage(props: GenrePageProps) {
  const header = {
    title: "Home | Games",
    description: "Home Games",
  };
  return (
    <GenreProvider>
      <HeaderComponent title={header.title} description={header.description} />
      <ListGenreContainer />
    </GenreProvider>
  );
}
