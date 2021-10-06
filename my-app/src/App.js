import React  from "react";
import './App.css';
import Dialogs from './componets/Dialogs/Dialogs';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/Profile';
import Music from './componets/Music/Music';
import News from "./componets/News/News";
import Settings from "./componets/Settings/Settings";
import {BrowserRouter, Route} from 'react-router-dom';



const App = (props) => {
    
    
    return (
    <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                    <Route path='/dialogs'          
                        render= { () => <Dialogs 
                          state={props.state.dialogsPage}/>}/> 
                            
                    <Route path='/profile' 
                        render= { () => <Profile 
                            state={props.state.profilePage} />}/>
                    <Route path='/news' 
                        render= { () => <News/>}/>
                    <Route path='/music' 
                        render= { () => <Music/>}/>
                    <Route path='/settings' 
                        render= { () => <Settings/>}/>
            </div>
        </div>
     </BrowserRouter>)
}


export default App;