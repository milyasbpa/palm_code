import AppLayout from "@/core/ui/layouts/app/AppLayout";
import * as React from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import ItemsGames from "@/features/developers/fragments/items/Items.developers";

export interface IListDeveloperContainerProps {}

export default function ListDeveloperContainer(
  props: IListDeveloperContainerProps
) {
  const router = useRouter();
  const pageContent = {
    title: router.query?.name,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor sem vitae pulvinar vestibulum. Vivamus molestie eros vitae sapien hendrerit pharetra. Integer id felis purus. Donec blandit commodo mauris vitae auctor. Aliquam quis condimentum mi, ullamcorper maximus metus. Maecenas vel lacinia justo, ac laoreet sem. Integer sed semper odio, eu vulputate quam. Donec eget tortor et quam suscipit tristique quis et arcu. Nunc sed sodales massa.",
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
        </div>

        {/* body */}
        <ItemsGames />
      </div>
    </AppLayout>
  );
}
