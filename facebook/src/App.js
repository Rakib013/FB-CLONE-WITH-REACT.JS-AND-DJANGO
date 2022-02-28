import React, {useEffect} from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import FriendRequest from './pages/FriendRequest';
import Profile from './pages/Profile';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import PostView from './pages/PostView';
import LogSignUp from './pages/LogSignUp';
import {useGlobalState} from '././state/provider';
import { axiosInstance } from './api/axios';

const App = () => {
  const [{profile}, dispatch] = useGlobalState();

  useEffect(() => {
    const fetchProfile = async () => {
      await axiosInstance.get('/profile').then(res => {
        dispatch({
          type: 'PROFILE',
          profile: res.data
        })
      })

      await axiosInstance.get('/posts').then(res => {
        dispatch({
          type: 'POSTS',
          posts: res.data.All,
        })
      })
    }
    fetchProfile();
  }, [dispatch]);
  console.log(profile)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={profile ? <><Nav /><Home /></> : <Navigate to="/LoginSignup" />}/>
          <Route path="/friends/profile/:id" element={<><Nav /><Profile pid={profile?.id} friends={profile?.friends} requests={profile?.requestedFriend} /></>}/>
          <Route path="/photo/view" element={<><PostView /></>} />
          <Route path="/LoginSignup" element={!profile ? <><LogSignUp /></> : <Navigate to="/" />}/>
          <Route path="/friends/request" element={<><Nav /><FriendRequest /></>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;