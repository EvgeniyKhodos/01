const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
/*     {
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
        }*/
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case  FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.userId]}
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (userId) => ({type: SET_USERS, userId});

export default usersReducer;