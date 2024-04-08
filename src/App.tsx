import React from 'react'

import { 
  BrowserRouter, 
  Routes, 
  Route 
} from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import Test from './pages/Test';
import Auth from './pages/Auth/Auth';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/test' element={<Test />} />
      <Route path='/login' element={<Auth />} />
    </Routes>
  </BrowserRouter>
)


export default App
