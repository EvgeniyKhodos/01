import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src='https://www.catsmob.com/post/2012/06/01089/creative_facebook_timeline_covers_104.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <p>Имя: {props.profile.fullName}</p>
                <p>О себе: {props.profile.aboutMe}</p>
                <p>
                    <span className="social facebook">
                        <a href="#" target="_blank"><i className="fa fa-facebook fa-2x"></i></a>
                    </span>
                    {props.profile.contacts.facebook}
                </p>
                <p>
                    <span className="social vk">
                        <a href="#" target="_blank"><i className="fa fa-vk fa-2x"></i></a>
                    </span>
                    {props.profile.contacts.vk}
                </p>
                <p>
                    <span className="social github">
                        <a href="#" target="_blank"><i className="fa fa-github fa-2x"></i></a>
                    </span>
                    {props.profile.contacts.github}
                </p>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;