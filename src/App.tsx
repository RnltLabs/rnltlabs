/**
 * Copyright (c) 2025 Roman Reinelt / RNLT Labs
 *
 * This software is proprietary and confidential.
 * Unauthorized use, reproduction, or distribution is prohibited.
 * For licensing information, contact: hello@rnltlabs.de
 */

import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { Imprint } from './pages/Imprint'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/imprint" element={<Imprint />} />
    </Routes>
  )
}

export default App
