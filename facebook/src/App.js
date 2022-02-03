import React from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import Profile from './pages/Profile';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PostView from './pages/PostView';
import LogSignUp from './pages/LogSignUp';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Nav /><Home /></>}/>
          <Route path="/profile" element={<><Nav /><Profile user={true} /></>}/>
          <Route path="/friends/profile" element={<><Nav /><Profile user={false} /></>}/>
          <Route path="/photo/view" element={<><PostView /></>} />
          <Route path="/LoginSignup" element={<><LogSignUp /></>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;