import React from 'react';

function PostForm(){
  return(
    <form className="post-form" action="/action_page.php">
      <div className="form-group">
        <input type="text" className="form-control" placeholder="What is on your mind?" />
      </div>
      <button type="submit" className="btn btn-default">Post!</button>
    </form>
  );
}

export default PostForm;