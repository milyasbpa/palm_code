import { useRouter } from "next/router";

import Link from "next/link";
import clsx from "clsx";

export interface INavigationBarComponentProps {
  menus: { name: string; link: string }[];
}
NavigationBarComponent.defaultProps = {
  menus: [],
};

export default function NavigationBarComponent(
  props: INavigationBarComponentProps
) {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav
      className={clsx(
        "flex justify-center fixed top-0 right-0 left-0 z-50",
        "border-b",
        "border-b-bright-gray",
        "box-border",
        "h-[94px]",
        "w-full",
        "bg-white"
      )}
    >
      <div
        className={clsx(
          "flex items-center justify-between",
          "max-w-screen-xl w-full py-6",
          "px-[1.25rem] xl:px-[0rem]",
          "py-[1.125rem] sm:py-[0rem]"
        )}
      >
        <div className={clsx("flex gap-x-[0.5rem] items-center justify-start")}>
          <Link href={"/"}>
            {/* <img
              src={
                props.variant === "normal"
                  ? "/logo/primary.logo.svg"
                  : "/logo/secondary.logo.svg"
              }
              className={clsx("w-[100px] sm:w-[130px] h-[30px] sm:h-[70px]")}
              loading={"lazy"}
            /> */}
          </Link>
        </div>

        <div
          className={clsx(
            "flex items-center justify-end",
            "md:gap-[0.5rem] lg:gap-[2rem]"
          )}
        >
          <div
            className={clsx("hidden sm:flex", "md:gap-[0.5rem] lg:gap-[2rem]")}
          >
            {props.menus.length > 0 &&
              props.menus.map((item, index) => (
                <Link key={index} href={item.link}>
                  <button
                    key={index}
                    className={clsx(
                      "px-4 py-[0.5rem] rounded-lg",
                      pathname === item.link ? "bg-primary" : "bg-white",

                      pathname === item.link ? "bg-opacity-100" : "bg-opacity-0"
                    )}
                  >
                    <p
                      className={clsx(
                        "font-medium text-sm",
                        pathname === item.link
                          ? "text-white"
                          : "text-charleston-green"
                      )}
                    >
                      {item.name}
                    </p>
                  </button>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
