import { Navigate, Route, Routes } from 'react-router'
import MagazinePage from '@/pages/magazine/MagazinePage.tsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MagazinePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
