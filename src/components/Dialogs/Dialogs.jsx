import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Image from "./Image/Image";

const Dialogs = (props) => {

    let dialogsElemenst = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

    let imagesElements = props.state.dialogs.map(i => <Image image={i.img}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { imagesElements }
            </div>
            <div className={s.dialogsItems}>
                { dialogsElemenst }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;