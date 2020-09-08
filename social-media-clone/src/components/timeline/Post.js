import React from 'react';

function Post(props){
  return(
    <React.Fragment>
      <h3>{props.author}</h3>
      <h4>{props.body}</h4>
      <hr/>
    </React.Fragment>
  );
}

export default Post;