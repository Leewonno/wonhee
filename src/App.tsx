import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import MagazinePage from '@/pages/magazine/MagazinePage.tsx'

const NeonPage = lazy(() => import('@/pages/neon/NeonPage.tsx'))
const BirthdayPage = lazy(() => import('@/pages/birthday/BirthdayPage.tsx'))

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<MagazinePage />} />
        <Route path="/neon" element={<NeonPage />} />
        <Route path="/birthday" element={<BirthdayPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  )
}

export default App
