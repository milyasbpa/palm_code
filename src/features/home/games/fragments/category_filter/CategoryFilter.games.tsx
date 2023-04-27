import { categories } from "@/core/data/static";
import { useContext } from "react";
import AutocompleteGames from "@/features/home/games/components/autocomplete/Autocomplete.games";
import { GamesHomeContext } from "../../contexts/GamesHome.context";
import { GamesHomeActionEnum } from "../../contexts/GamesHome.types";

export interface ICategoryFilterGamesProps {}

export default function CategoryFilterGames(props: ICategoryFilterGamesProps) {
  const { state, dispatch } = useContext(GamesHomeContext);
  const handleFilter = (data: { id: number; name: string }) => {
    dispatch({
      type: GamesHomeActionEnum.FilterByCategory,
      payload: data,
    });
  };
  return (
    <AutocompleteGames
      label={"Category"}
      options={categories}
      onSelect={handleFilter}
    />
  );
}
