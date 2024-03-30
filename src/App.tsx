import React from 'react'

import { 
  BrowserRouter, 
  Routes, 
  Route 
} from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />} />
    </Routes>
  </BrowserRouter>
)


export default App
