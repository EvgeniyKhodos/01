import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.item}>
            <img src='https://sun9-7.userapi.com/c854520/v854520984/3b3e/bTEXN4Lkv2Y.jpg'/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;