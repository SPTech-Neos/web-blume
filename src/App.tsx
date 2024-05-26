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
import Establishment from './pages/ProfileEstablishment/ProfileEstablishment';
import Client from './pages/ProfileClient/ProfileClient';
const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/test' element={<Test />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/feed' element={<Feed />} />
      <Route path='/establishment' element={<Establishment />} />
      <Route path='/client' element={<Client />} />
    </Routes>
  </BrowserRouter>
)


export default App
