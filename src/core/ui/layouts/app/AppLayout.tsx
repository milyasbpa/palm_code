import clsx from "clsx";
import NavigationBarComponent from "@/core/ui/components/navigation_bar/NavigationBar.component";

import { menu } from "@/core/data/static";
export interface IAppLayoutProps {
  children?: React.ReactNode;
}

export default function AppLayout(props: IAppLayoutProps) {
  return (
    <main
      className={clsx(
        "grid grid-cols-1",
        "w-full",
        "min-h-[100vh]",
        "relative"
      )}
    >
      <NavigationBarComponent menus={menu} />
      {props.children}
    </main>
  );
}
