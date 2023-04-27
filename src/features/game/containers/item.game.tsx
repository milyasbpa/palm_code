import AppLayout from "@/core/ui/layouts/app/AppLayout";
import * as React from "react";
import clsx from "clsx";
import ItemsGames from "../fragments/item/Item.game";

export interface IItemGameContainerProps {}

export default function ItemGameContainer(props: IItemGameContainerProps) {
  const pageContent = {
    title: "Games",
    description: "List of games",
  };

  return (
    <AppLayout>
      <div
        className={clsx(
          "grid grid-cols-1 justify-center content-start justify-items-center box-border",
          "gap-y-[1rem] sm:gap-y-[4rem]",
          "pt-[5rem] sm:pt-[9.625rem] pb-[6.25rem]",
          "w-full",
          "bg-gradient-to-r from-white to-mint-cream"
        )}
      >
        {/* body */}
        <ItemsGames />
      </div>
    </AppLayout>
  );
}
