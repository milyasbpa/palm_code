import { platform } from "@/core/data/static";
import { useContext } from "react";
import AutocompleteGames from "@/features/home/games/components/autocomplete/Autocomplete.games";
import { GamesHomeContext } from "../../contexts/GamesHome.context";
import { GamesHomeActionEnum } from "../../contexts/GamesHome.types";

export interface IPlatformFilterGamesProps {}

export default function PlatformFilterGames(props: IPlatformFilterGamesProps) {
  const { state, dispatch } = useContext(GamesHomeContext);
  const handleFilter = (data: { id: number; name: string }) => {
    dispatch({
      type: GamesHomeActionEnum.FilterByPlatform,
      payload: data,
    });
  };
  return (
    <AutocompleteGames
      label={"Platform"}
      options={platform}
      onSelect={handleFilter}
    />
  );
}
