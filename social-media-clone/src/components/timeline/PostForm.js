import React from 'react';
import { v4 } from 'uuid';

function PostForm(props){

  function addNewPost(event){
    event.preventDefault();
    console.log(event.target.author.value);
    console.log(event.target.body.value);
    // props.onNewTicketCreation({author: event.target.author.value, body: event.target.body.value, id: v4()});
  }


  return(
    <React.Fragment>
    {/* <form className="post-form" action="/action_page.php">
      <div className="form-group">
        <input type="text" className="form-control" placeholder="What is on your mind?" />
      </div>
      <button type="submit" className="btn btn-default">Post!</button>
    </form> */}

    <form onSubmit={addNewPost}>
    <input
      type='text'
      author='author'
      placeholder='who are you?' />
    <input 
      type='text'
      body='body'
      placeholder='What is on your mind today?' />
    <button type='submit'>Post!</button>
    </form>
    </React.Fragment>
  );
}

export default PostForm;