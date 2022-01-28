import React from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import Profile from './pages/Profile';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PostView from './pages/PostView';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Nav /><Home /></>}/>
          <Route path="/profile" element={<><Nav /><Profile /></>}/>
          <Route path="/photo/view" element={<><PostView /></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;