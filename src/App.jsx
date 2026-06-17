import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Libraries from "./pages/Libraries";
import Volumes from "./pages/Volumes";
import Settings from "./pages/Settings";
import LibraryDetails from "./pages/LibraryDetails";
import VolumeDetails from "./pages/VolumeDetails";
import WallDetails from "./pages/WallDetails";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/libraries" element={<Libraries />} />
          <Route path="/libraries/:id" element={<LibraryDetails />} />
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
