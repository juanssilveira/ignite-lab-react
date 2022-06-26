import { Navigate, Route, Routes } from 'react-router-dom'

import { Platform } from './pages/Platform'
import { Subscription } from './pages/Subscription'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscription />} />
      <Route path="/platform/lesson/:slug" element={<Platform />} />

      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}