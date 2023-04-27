import { useContext } from "react";
import clsx from "clsx";
import ItemCardGames from "@/features/home/games/components/item_card/ItemCard.games";
import { GameContext } from "../../contexts/Game.context";

import { useGameGetGame } from "../../hooks/useGetGame.game";

export interface IItemGameProps {}

export default function ItemGame(props: IItemGameProps) {
  const { state, dispatch } = useContext(GameContext);
  const { isFetching: isFetchingGetGame } = useGameGetGame();

  if (isFetchingGetGame) {
    return (
      <div
        className={clsx(
          "flex gap-[2rem]",
          "box-border max-w-[1200px]",
          "px-[1rem] sm:px-[0rem]"
        )}
      >
        <div className={clsx("grid", "grid-cols-1", "w-full")}>
          <div
            className={clsx(
              "grid grid-cols-1 justify-center content-start justify-items-center",
              "gap-y-[3rem] w-full"
            )}
          >
            <div
              className={clsx(
                "grid justify-center justify-items-center",
                "max-w-[75rem] gap-x-[1.25rem] gap-y-[1.25rem]",
                "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
              )}
            >
              {/* skeleton */}
              {/* {state.games.data?.map((game) => (
            <ItemCardGames
              id={game.id}
              title={game.title}
              short_description={game.short_description}
              publisher={game.publisher}
              release_date={game.release_date}
              developer={game.developer}
              platform={game.platform}
            />
          ))} */}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "flex gap-[2rem]",
        "box-border max-w-[1200px]",
        "px-[1rem] sm:px-[0rem]"
      )}
    >
      <div className={clsx("grid", "grid-cols-1", "w-full")}>
        <ItemCardGames
          id={state.game.data.id}
          title={state.game.data.title}
          short_description={state.game.data.short_description}
          publisher={state.game.data.publisher}
          release_date={state.game.data.release_date}
          developer={state.game.data.developer}
          platform={state.game.data.platform}
        />
      </div>
    </div>
  );
}
