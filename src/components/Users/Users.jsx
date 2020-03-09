import React from "react";
import styles from './users.module.css';

let Users = (props) => {
debugger;
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://static.probusiness.io/720x480c/n/05/9/36782619_1739036366166086_3461912368366223360_n.jpg',
                    followed: false,
                    fullName: 'Evgeny',
                    status: 'I am happy',
                    location: {city: 'Krasnoyrsk', country: 'Russia'}
                },
                {
                    id: 2,
                    photoUrl: 'https://static.probusiness.io/720x480c/n/05/9/36782619_1739036366166086_3461912368366223360_n.jpg',
                    followed: true,
                    fullName: 'Sasha',
                    status: 'I am good',
                    location: {city: 'Krasnoyrsk', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://static.probusiness.io/720x480c/n/05/9/36782619_1739036366166086_3461912368366223360_n.jpg',
                    followed: false,
                    fullName: 'Dmitry',
                    status: '',
                    location: {city: 'Krasnoyrsk', country: 'Russia'}
                },
                {
                    id: 4,
                    photoUrl: 'https://static.probusiness.io/720x480c/n/05/9/36782619_1739036366166086_3461912368366223360_n.jpg',
                    followed: true,
                    fullName: 'Anton',
                    status: 'I am happy',
                    location: {city: 'Krasnoyrsk', country: 'Russia'}
                }
            ]
        )
    }
debugger;
    return <div>
        {
            props.users.map(u => <div key={u.id}>
            < span>
                <div>
                <img src={u.photoUrl} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed ? <button onClick={() => {
                        props.unfollow(u.id)
                    }}>Unfollow</button> : <button onClick={() => {
                        props.follow(u.id)
                    }}>Follow</button>}
                </div>
            </span>
                    <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                    </span>
                </div>
            )
        }
    </div>
};
export default Users;