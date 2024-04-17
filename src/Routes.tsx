import React from "react";

import { 
    BrowserRouter, 
    Routes, 
    Route 
} from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import Test from './pages/Test';
import Auth from './pages/Auth/Auth';
import Feed from './pages/Feed/Feed';

function AppRoutes() {
    return (
        <>
           <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/test' element={<Test />} />
                    <Route path='/auth' element={<Auth />} />
                    <Route path='/feed' element={<Feed />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes;