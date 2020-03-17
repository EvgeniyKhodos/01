import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <p>Имя: {props.profile.fullName}</p>
                <p>О себе: {props.profile.aboutMe}</p>
                <p>Facebook: {props.profile.contacts.facebook}</p>
                <p>VK: {props.profile.contacts.vk}</p>
                <p>GitHub: {props.profile.contacts.github}</p>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;