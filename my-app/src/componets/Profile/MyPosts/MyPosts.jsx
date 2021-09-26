import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = () => {
    return (
  <div>
    <div className={s.post}>My posts</div>
      
    <div>
    <textarea></textarea>
      <button>Add post</button>
      
    </div>
          
    <div className={s.posts}>
      <Post message ='Hi, bro' likesCount='0'/>
      <Post message ='This my first post' likesCount='4'/>
      
      
    </div>
    
  </div>
    )
}
  
export default MyPosts;