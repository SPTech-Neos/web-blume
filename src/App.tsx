import React from 'react'

import { 
  BrowserRouter, 
  Routes, 
  Route 
} from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import Test from './pages/Test';
import Auth from './pages/Auth/Auth';
import Feed from './pages/Feed/Feed';
import ProfileB2B from './pages/ProfileB2B/ProfileB2B';
const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/test' element={<Test />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/feed' element={<Feed />} />
      <Route path='/profileB2B' element={<ProfileB2B />} />
    </Routes>
  </BrowserRouter>
)


export default App
