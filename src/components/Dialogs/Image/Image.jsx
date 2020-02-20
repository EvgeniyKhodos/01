import React from "react";
import s from './../Dialogs.module.css';

const Image = (props) => {
    return <div className={s.dialog}>
        <img src='https://static.mk.ru/upload/entities/2019/07/31/11/articles/detailPicture/74/2a/81/5e/f36f740bc1672e15668aaac619870fff.jpg' />
        <img src={props.img}/>
    </div>
}

export default Image;