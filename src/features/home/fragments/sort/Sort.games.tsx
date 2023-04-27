import { sortBy } from "@/core/data/static";
import { useContext } from "react";
import DropdownGames from "../../components/dropdown/Dropdown.games";
import { GamesHomeContext } from "../../contexts/GamesHome.context";
import { GamesHomeActionEnum } from "../../contexts/GamesHome.types";

export interface ISortGamesProps {}

export default function SortGames(props: ISortGamesProps) {
  const { state, dispatch } = useContext(GamesHomeContext);
  const handleSelect = (data: { id: number; name: string }) => {
    dispatch({
      type: GamesHomeActionEnum.SortBy,
      payload: data,
    });
  };
  return (
    <DropdownGames label={"Sort By"} options={sortBy} onSelect={handleSelect} />
  );
}
