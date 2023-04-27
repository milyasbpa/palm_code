import * as React from "react";

import HeaderComponent from "@/core/ui/components/header/Header.component";
import { DevelopersProvider } from "@/features/developers/contexts/Developers.context";
import ListDevelopersContainer from "@/features/developers/containers/List.developers";

export interface DevelopersPageProps {}

export default function DevelopersPage(props: DevelopersPageProps) {
  const header = {
    title: "Developers",
    description: "Developers",
  };
  return (
    <DevelopersProvider>
      <HeaderComponent title={header.title} description={header.description} />
      <ListDevelopersContainer />
    </DevelopersProvider>
  );
}
