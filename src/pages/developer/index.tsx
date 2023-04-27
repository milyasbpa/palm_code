import * as React from "react";

import HeaderComponent from "@/core/ui/components/header/Header.component";
import { GenreProvider } from "@/features/genres/contexts/Genre.context";
import ListGenreContainer from "@/features/genres/containers/List.genre";

export interface DevelopersPageProps {}

export default function DevelopersPage(props: DevelopersPageProps) {
  const header = {
    title: "Developers",
    description: "Developers",
  };
  return (
    <GenreProvider>
      <HeaderComponent title={header.title} description={header.description} />
      <ListGenreContainer />
    </GenreProvider>
  );
}
