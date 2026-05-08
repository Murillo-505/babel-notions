import { useState } from 'react'

import LibraryCard from '../components/LibraryCard'
import SearchBar from '../components/SearchBar'

import { libraries } from '../data/libraries'

function Home() {
  const [search, setSearch] = useState('')

  const filteredLibraries = libraries.filter((library) =>
    library.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h1 className="text-4xl font-bold mb-2">
        Biblioteca
      </h1>

      <p className="text-zinc-400 mb-6">
        Explore suas coleções de conhecimento.
      </p>

      <div className="mb-6">
        <SearchBar
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        {filteredLibraries.map((library) => (
          <LibraryCard
            key={library.id}
            name={library.name}
            description={library.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Home