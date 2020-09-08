import React from 'react';
import Header from './Header';
import PostForm from './PostForm';
import Post from './Post';

const timelinePosts = [
  {
    author: 'Ian',
    body: 'Omg! Today was just like the freakin\' best! Living my best #CovidLyfe' +
      'by the way, who decided to burn down the mountain? Seriously F those ppl!' +
      'For all my #BossCoders out there, HMU for an exclusive opp to make sick cash at home!'
  },
  {
    author: 'Fred',
    body: 'always talking out his asssss.'
  },
  {
    author: 'Noel',
    body: 'Feeling nervous about REACT. And the fires, and the wind, and the... 2020 is not my year...'
  },
];

function Timeline(){
  return(
    <React.Fragment>
      <Header/>
      <hr/>
      <PostForm/>
      <hr/>
      {timelinePosts.map((post,index) =>
        <Post author={post.author}
        body={post.body}
        key={index}
      />)}
    </React.Fragment>
  );
}

export default Timeline;