import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

function MainLayout({ children }) {
  return (
    <div className="bg-zinc-950 min-h-screen text-white flex">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="p-6 flex-1">
          {children}
        </main>
      </div>
    </div>
  )
}

export default MainLayout