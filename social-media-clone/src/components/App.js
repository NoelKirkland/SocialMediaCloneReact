import React from 'react';
import Timeline from './timeline/Timeline';
import Navbar from './navbar/Navbar';
import FriendsList from './friendsList/FriendsList';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="row">
        <div className="col-md-6">
      <Timeline />
        </div>
        <div className="col-md-6">
      <FriendsList />
        </div>
      </div>
      {/* <ProfileHeader />
      <ProfileBody /> */}
    </React.Fragment>
  );
}

export default App;
