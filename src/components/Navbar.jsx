import SearchBar from "./SearchBar";
import { useSearch } from "../context/SearchContext";

function Navbar() {
  const { search, setSearch } = useSearch();

  return (
    <header className="h-16 border-b border-zinc-800 bg-zinc-900 flex items-center justify-center px-6">
      <div className="w-full max-w-xl">
        <SearchBar
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
    </header>
  );
}

export default Navbar;
