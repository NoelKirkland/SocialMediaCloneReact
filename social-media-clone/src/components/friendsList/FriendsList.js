import React from 'react';
import Header from './Header';
import Friend from './Friend';

const friends = [
  {
    friendName: 'Noel',
  },
  {
    friendName: 'Frederick',
  },
  {
    friendName: 'Ian',
  },
  {
    friendName: 'Ada',
  },
  {
    friendName: 'Voldemort',
  },
]

function FriendsList(){
  return(
    <React.Fragment>
      <Header/>
      <hr/>
      {friends.map((friend,index) =>
      <Friend friendName={friend.friendName}
      key={index}
      />)}
    </React.Fragment>
  )
}

export default FriendsList;