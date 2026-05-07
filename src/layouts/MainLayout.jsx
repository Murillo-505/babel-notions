import Sidebar from "../components/Sidebar"

function MainLayout({ children }) {
  return (
    <div className="bg-zinc-950 min-h-screen text-white flex">
      <Sidebar />

      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  )
}

export default MainLayout