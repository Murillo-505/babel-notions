import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { SearchProvider } from "../context/SearchContext";

function MainLayout({ children }) {
  return (
    <SearchProvider>
      <div className="flex h-screen overflow-hidden bg-zinc-950 text-white">
        <Sidebar />

        <div className="flex min-h-0 min-w-0 flex-1 flex-col">
          <Navbar />

          <main className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </div>
    </SearchProvider>
  );
}

export default MainLayout;
