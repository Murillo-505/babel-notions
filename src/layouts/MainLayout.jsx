import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { SearchProvider } from "../context/SearchContext";

function MainLayout({ children }) {
  return (
    <SearchProvider>
      <div className="bg-zinc-950 min-h-screen text-white flex">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          <Navbar />

          <main className="p-6 flex-1">{children}</main>
        </div>
      </div>
    </SearchProvider>
  );
}

export default MainLayout;
