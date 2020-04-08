import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import Profile from "../Profile";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    // map - это метод массива, для вызова каждого элемента массива, используется для создания новых массивов
    // например, для JSX разметки

    let newPostElement = React.createRef();
    // создаем ссылку

    let onAddPost = (values) => {
        props.addPost(values.postText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const addNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="postText" />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(addNewPostForm);

export default MyPosts;