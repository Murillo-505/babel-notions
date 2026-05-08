import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import MainLayout from './layouts/MainLayout'

import Home from './pages/Home'
import Libraries from './pages/Libraries'
import Volumes from './pages/Volumes'
import Settings from './pages/Settings'

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/libraries" element={<Libraries />} />
          <Route path="/volumes" element={<Volumes />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App