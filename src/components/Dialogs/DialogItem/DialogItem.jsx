import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    let pathimg = props.img;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>
           {/*<img src=pathimg>*/}
            {props.name}
        </NavLink>
        {/*/ NavLink позволяет не перезагружать каждый раз страницу, вместо тега а */}
    </div>
}

export default DialogItem;