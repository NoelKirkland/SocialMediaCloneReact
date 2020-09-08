import React from 'react';
import logo from './logo.svg';
import Timeline from '.timeline/Timeline'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Timeline />
      <FriendsList />
      <ProfileHeader />
      <ProfileBody />
    </React.Fragment>
  );
}

export default App;
