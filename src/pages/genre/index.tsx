import * as React from "react";

import HeaderComponent from "@/core/ui/components/header/Header.component";
import { GenresProvider } from "@/features/genres/contexts/Genres.context";
import ListGenresContainer from "@/features/genres/containers/List.genres";

export interface GenrePageProps {}

export default function GenrePage(props: GenrePageProps) {
  const header = {
    title: "Home | Games",
    description: "Home Games",
  };
  return (
    <GenresProvider>
      <HeaderComponent title={header.title} description={header.description} />
      <ListGenresContainer />
    </GenresProvider>
  );
}
