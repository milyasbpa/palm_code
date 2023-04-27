import { useContext } from "react";
import clsx from "clsx";
import { GamesHomeContext } from "../../contexts/GamesHome.context";
import ItemCardGames from "../../components/item_card/ItemCard.games";
import { useHomeGetTopRating } from "../../hooks/useGetTopRating.games";

export interface ITopRatingGamesProps {}

export default function TopRatingGames(props: ITopRatingGamesProps) {
  const { state, dispatch } = useContext(GamesHomeContext);
  const { isFetching: isFetchingGetTopRating } = useHomeGetTopRating();

  return (
    <div className={clsx("grid", "grid-cols-1", "w-full")}>
      <h2
        className={clsx(
          "text-[1.25rem] sm:text-[2.25rem]",
          "font-primary font-medium",
          "text-charleston-green"
        )}
      >
        {"Top 10 Games"}
      </h2>
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
          {state.top_rating.data?.map((game) => (
            <ItemCardGames
              key={game.id}
              id={game.id}
              title={game.title}
              short_description={game.short_description}
              publisher={game.publisher}
              release_date={game.release_date}
              developer={game.developer}
              platform={game.platform}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
