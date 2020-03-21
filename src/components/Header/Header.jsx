import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img
            src='https://awionline.org/sites/default/files/uploads/images/18-AWI-Logo-Hexagons-Green-Border_300x300.png'></img>

        <div className={s.loginBlock}>
            { props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>

    </header>
}

export default Header;