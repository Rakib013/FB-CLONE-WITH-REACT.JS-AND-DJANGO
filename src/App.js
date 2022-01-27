import React from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import Profile from './pages/Profile';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Nav /><Home /></>}/>
          <Route path="/profile" element={<><Nav /><Profile /></>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;