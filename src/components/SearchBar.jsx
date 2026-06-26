function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Buscar paredes, estantes e volumes..."
      value={value}
      onChange={onChange}
      className="input"
    />
  );
}

export default SearchBar;
