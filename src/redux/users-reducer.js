const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    users: [
        {id: 1, fullName: 'Evgeny', status: 'I am happy', location: {city: 'Krasnoyrsk', country: 'Russia'} },
        {id: 2, fullName: 'Sasha', status: 'I am good', location: {city: 'Krasnoyrsk', country: 'Russia'} },
        {id: 3, fullName: 'Dmitry', status: '', location: {city: 'Krasnoyrsk', country: 'Russia'} },
        {id: 4, fullName: 'Anton', status: 'I am happy', location: {city: 'Krasnoyrsk', country: 'Russia'} },
    ],
    newPostText: 'it-kamasutra.com'
}  // эта переменная необходима для первого прохода REDUX

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default usersReducer;