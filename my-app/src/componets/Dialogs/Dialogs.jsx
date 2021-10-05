import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name:"Steave"},
        {id: 2, name:"Jhon"},
        {id: 3, name:"Michael"},
        {id: 4, name:"Brad"},
     ]

     let messages = [
        {id: 1, message:"Hi"},
        {id: 2, message:"How are you?"},
        {id: 3, message:"All is fine??"},
        {id: 4, message:"All is fine??"},
     ]
        let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);
        
let messagesElements = messages.map( m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            
            </div>
        <div className={s.messages}>
            {messagesElements}
           
            
             
        </div>
        </div>
    )
}

export default Dialogs;  