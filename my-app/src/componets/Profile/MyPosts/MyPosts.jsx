import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = (props) => {

  let posts = [
    {id: 1, message:"Hi, bro", likesCount: 12},
    {id: 2, message:"This my first post", likesCount: 11}
    ]

    let postsElements =
      posts.map ( p => <Post message={p.message} likesCount={p.likesCount}/>);


    return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
            <textarea></textarea>
      </div>
      
      <div>
      <button>Add post</button>
      </div>
      
    
          
    <div className={s.posts}>
      
      {postsElements}
      
    </div>
    
  </div>
    )
}
  
export default MyPosts;