import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
    <div className={s.img}>
    <img src='https://i.pinimg.com/originals/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg' width="160" height="160"/>
    </div>
    <div  className={s.postst_up}>
    <div>
      Ava + description
    </div>
    <div>
      My posts
      <div>
        New post
      </div>
      <div className={s.posts}>
        <div className={s.item}>
          Post 1
        </div>
        <div className={s.item}>
          Post 2 
        </div>
      </div>
    </div>
  </div>
  </div>
 ;
}
export default Profile;