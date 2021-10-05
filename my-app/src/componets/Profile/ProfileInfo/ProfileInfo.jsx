import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
  <div >
    <div>
    <img src='https://www.uktech.news/wp-content/uploads/2021/05/Crypto-Terms.jpg' width="1000" height="230"/>
    </div>
       
      <div className={s.descriptionBlock}>
              ava + description
      </div>
  
        
  </div> 
  )
}
export default ProfileInfo;