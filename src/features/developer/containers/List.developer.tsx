import AppLayout from "@/core/ui/layouts/app/AppLayout";
import * as React from "react";
import clsx from "clsx";
import ItemsGames from "@/features/developers/fragments/items/Items.developers";

export interface IListDeveloperContainerProps {}

export default function ListDeveloperContainer(
  props: IListDeveloperContainerProps
) {
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
        {/* header */}
        <div
          className={clsx(
            "px-[1rem] sm:px-[0rem]",
            "grid grid-cols-[auto_auto] justify-between content-start justify-items-start items-center",
            "gap-y-2 w-full max-w-[1200px]"
          )}
        >
          <div
            className={clsx(
              "grid grid-cols-1 justify-start content-start justify-items-start",
              "gap-y-2 max-w-[75rem] w-full"
            )}
          >
            <h1
              className={clsx(
                "text-[1.25rem] sm:text-[2.25rem]",
                "font-primary font-medium",
                "text-charleston-green"
              )}
            >
              {pageContent.title}
            </h1>
            <p
              className={clsx(
                "text-[0.75rem] sm:text-[1rem]",
                "font-regular",
                "text-independence"
              )}
            >
              {pageContent.description}
            </p>
          </div>
          {/* <SearchProducts /> */}
        </div>

        {/* body */}
        <ItemsGames />
      </div>
    </AppLayout>
  );
}
