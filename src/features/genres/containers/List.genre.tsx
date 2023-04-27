import AppLayout from "@/core/ui/layouts/app/AppLayout";
import * as React from "react";
import GameCardList from "../components/item_card/ItemCard.genre";
import clsx from "clsx";
import ItemsGames from "../fragments/items/Items.genre";

export interface IListGenreContainerProps {}

export default function ListGenreContainer(props: IListGenreContainerProps) {
  const pageContent = {
    title: "Games",
    description: "List of games",
  };
  const data: { [key: string]: string }[] = [
    { type: "food", name: "Pizza" },
    { type: "drink", name: "Coffee" },
    { type: "food", name: "Hot Dog" },
  ];
  // const group = data.reduce((acc, item) => {
  //   const result = {
  //     [item.type]: [item],
  //   };

  //   return result;
  // }, {} as { [key: string]: { [key: string]: string }[] });
  // const groupBy = (array: any, key: any) => {
  //   return array.reduce((hash: any, obj: any) => {
  //     if (obj[key] === undefined) return hash;
  //     return Object.assign(hash, {
  //       [obj[key]]: (hash[obj[key]] || []).concat(obj),
  //     });
  //   }, {});
  // };
  // const group = groupBy(data, "type");
  // console.log(data, group, "ini group");
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
        {/* tools */}
        <div
          className={clsx(
            "flex sm:hidden",
            "items-center justify-between",
            "px-[1rem] sm:px-[0rem]",
            "w-full"
          )}
        >
          <div
            className={clsx("flex items-center justify-start gap-x-[0.625rem]")}
          >
            {/* <Link href={RouterPathName.Home}>
              <NavigationIcon
                className={clsx("w-[1.5rem] h-[1.5rem]", "fill-cetacean-blue")}
              />
            </Link> */}

            <h1 className={clsx("text-[1rem] text-charleston-green font-bold")}>
              {"Produk"}
            </h1>
          </div>

          {/* <div>
            <FilterDrawerProduct />
          </div> */}
        </div>

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
