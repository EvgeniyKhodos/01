import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Loginpage from "./components/Login/Login";

const App = (props) => {
    return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={ () => <DialogsContainer /> }/>
                    {/*вызов анонимной функции, чтобы передать props*/}
                    <Route path='/profile/:userId?'
                           render={ () => <ProfileContainer/> }/>
                           {/* Route - смотрит какую отображать страницу, без перезагрузки, следит за адресной строкой браузера*/}
                    <Route path='/users'
                           render={ () => <UsersContainer />}/>
                    <Route path='/login'
                           render={ () => <Loginpage />}/>

                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
    )
}

export default App;