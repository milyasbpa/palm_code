import SearchComponent from "@/core/ui/components/search/Search.component";
import { useContext } from "react";
import { GamesHomeContext } from "../../contexts/GamesHome.context";
import { GamesHomeActionEnum } from "../../contexts/GamesHome.types";

export interface ISearchGamesProps {}

export default function SearchGames(props: ISearchGamesProps) {
  const { state, dispatch } = useContext(GamesHomeContext);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: GamesHomeActionEnum.SearchGame,
      payload: e.currentTarget.value,
    });
  };
  return (
    <SearchComponent
      label={"Search"}
      placeholder={"search game"}
      onChange={handleSearch}
    />
  );
}
