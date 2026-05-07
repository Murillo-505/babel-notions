function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-900 border-r border-zinc-800 p-4">
      <h2 className="text-2xl font-bold mb-8">
        Babel
      </h2>

      <nav className="flex flex-col gap-2">
        <button className="text-left p-2 rounded hover:bg-zinc-800 transition">
          Biblioteca
        </button>

        <button className="text-left p-2 rounded hover:bg-zinc-800 transition">
          Volumes
        </button>

        <button className="text-left p-2 rounded hover:bg-zinc-800 transition">
          Configurações
        </button>
      </nav>
    </aside>
  )
}

export default Sidebar