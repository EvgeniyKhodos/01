const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [],
    newPostText: 'it-kamasutra.com'
}  // эта переменная необходима для первого прохода REDUX

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case  FOLLOW: {
            let stateCopy = {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            let stateCopy = {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS:
            return { ...state, users: [ ...state.users, ...action.users]}
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (userId) => ({type: SET_USERS, userId});

export default usersReducer;