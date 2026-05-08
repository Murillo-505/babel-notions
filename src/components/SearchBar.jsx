function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Buscar biblioteca..."
      value={value}
      onChange={onChange}
      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 outline-none focus:border-zinc-600"
    />
  )
}

export default SearchBar