import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import Profile from "../Profile";

const MyPosts = (props) => {
  let postsElements =
      props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
       // map - это метод массива, для вызова каждого элемента массива, используется для создания новых массивов
    // например, для JSX разметки

    let newPostElement = React.createRef();
    // создаем ссылку

    let addPost = () => {
      let text = newPostElement.current.value;
      props.addPost( text )
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={ newPostElement }></textarea>
                    {/*Полю определяем, что он будет ссылать на наш ref*/}
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;