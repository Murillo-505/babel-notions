import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Libraries from "./pages/Libraries";
import Volumes from "./pages/Volumes";
import Settings from "./pages/Settings";
import LibraryDetails from "./pages/LibraryDetails";
import ShelfDetails from "./pages/ShelfDetails";
import VolumeDetails from "./pages/VolumeDetails";
import WallDetails from "./pages/WallDetails";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/estantes" element={<Libraries />} />
          <Route path="/estantes/:id" element={<LibraryDetails />} />
          <Route path="/shelves/:id" element={<ShelfDetails />} />
          <Route path="/volumes" element={<Volumes />} />
          <Route path="/volumes/:id" element={<VolumeDetails />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/walls/:id" element={<WallDetails />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
