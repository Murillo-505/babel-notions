import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-900 border-r border-zinc-800 p-4">
      <h2 className="text-2xl font-bold mb-8">
        Babel
      </h2>

      <nav className="flex flex-col gap-2">
        <Link 
        to="/" 
        className="p-2 rounded hover:bg-zinc-800 transition"
        >
          Home
        </Link>

        <Link 
        to="/libraries" 
        className="p-2 rounded hover:bg-zinc-800 transition"
        >
          Bibliotecas
        </Link>

        <Link 
        to="/volumes" 
        className="p-2 rounded hover:bg-zinc-800 transition"
        >
          Volumes
        </Link>

        <Link 
        to="/settings" 
        className="p-2 rounded hover:bg-zinc-800 transition"
        >
          Configurações
        </Link>
      </nav>
    </aside>
  )
}

export default Sidebar