import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return (
  <div className={s.content}>
    <div className={s.img}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgXsYsvC57QiigsoTedYeaYnCwRnnxRq_KXw&usqp=CAU' width="1000" height="200"/>
    </div>
       
      <div className={s.cccc}>
              ava + description
      </div>
  <MyPosts/>
        
  </div> 
  )
}
export default Profile;