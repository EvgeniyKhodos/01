import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Image from "./Image/Image";

const Dialogs = (props) => {

    let dialogsElemenst = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} img ={d.img} />);

    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert( text );
    }

    return (
        <div className={s.dialogs}>
            <div>
                <textarea ref={ newMessageElement }></textarea>
            </div>
            <div>
                <button onClick={ addMessage }>Add message</button>
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