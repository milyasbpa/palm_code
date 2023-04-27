import AppLayout from "@/core/ui/layouts/app/AppLayout";
import * as React from "react";
import clsx from "clsx";
import ItemsGames from "@/features/home/games/fragments/items/Items.games";
import SearchGames from "@/features/home/games/fragments/search/Search.games";
import CategoryFilterGames from "@/features/home/games/fragments/category_filter/CategoryFilter.games";
import PlatformFilterGames from "@/features/home/games/fragments/platform_filter/PlatformFilter.games";
import SortGames from "@/features/home/games/fragments/sort/Sort.games";
import TopRatingGames from "../fragments/top_rating/TopRating.games";

export interface IListGameContainerProps {}

export default function ListGameContainer(props: IListGameContainerProps) {
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
        <div
          className={clsx(
            "grid gap-y-[2rem]",
            "box-border max-w-[1200px] w-full",
            "px-[1rem] sm:px-[0rem]"
          )}
        >
          <TopRatingGames />
          <div
            className={clsx(
              "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center justify-end w-full",
              "gap-x-[2rem]"
            )}
          >
            <CategoryFilterGames />
            <PlatformFilterGames />
            <SortGames />
            <SearchGames />
          </div>
          <ItemsGames />
        </div>
      </div>
    </AppLayout>
  );
}
