import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={ () => <Dialogs
                           store={props.store}/>}/>
                    {/*вызов анонимной функции, чтобы передать props*/}
                    <Route path='/profile'
                           render={ () => <Profile
                               profilePage={props.state.profilePage}
                               dispatch={props.dispatch}
                               /> }/>
                           {/* Route - смотрит какую отображать страницу, без перезагрузки, следит за адресной строкой браузера*/}
                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
    )
}

export default App;