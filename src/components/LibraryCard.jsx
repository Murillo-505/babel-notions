import { Link } from 'react-router-dom'

function LibraryCard({
  id,
  name,
  description,
  onDelete,
  onEdit,
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
      <Link to={`/libraries/${id}`}>
        <h2 className="text-xl font-bold mb-2">
          {name}
        </h2>

        <p className="text-zinc-400 mb-4">
          {description}
        </p>
      </Link>

      <div className='flex gap-2'>
        <button
          onClick={() => onEdit({id, name, description})}
          className='bg-yellow-600 px-3 py-2 rounded hover:opacity-90 mr-2 cursor-pointer'
        >
          Editar
        </button>

        <button
          onClick={() => onDelete(id)}
          className="bg-red-600 px-3 py-2 rounded hover:opacity-90 cursor-pointer"
        >
          Excluir
        </button>
      </div>

    </div>
  )
}

export default LibraryCard