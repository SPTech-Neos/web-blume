import React from 'react'

import { 
  BrowserRouter, 
  Routes, 
  Route 
} from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import Test from './pages/Test';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/test' element={<Test />} />
    </Routes>
  </BrowserRouter>
)


export default App
