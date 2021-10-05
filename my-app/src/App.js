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
                <Route path='/dialogs' component={Dialogs}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
     </BrowserRouter>)
}


export default App;