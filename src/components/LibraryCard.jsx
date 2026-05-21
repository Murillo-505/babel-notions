import { Link } from 'react-router-dom'

function LibraryCard({ id, name, description }) {
  return (
    <Link to={`/libraries/${id}`}>
      <div className="bg-zinc-900 border border-zinc-800 rounded-x1 p-4 hover:bg-zinc-800 transition cursor-pointer">
        <h2 className="text-xl font-bold mb-2">
          {name}
        </h2>
        
        <p className="text-zinc-400">
          {description}
        </p>
      </div>
    </Link>
  )
}

export default LibraryCard