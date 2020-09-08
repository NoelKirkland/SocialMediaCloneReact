import React from 'react';

function Friend(props){
  return(
    <React.Fragment>
    <h4>{props.friendName}</h4>
    <hr/>
    </React.Fragment>
  );
}

export default Friend;