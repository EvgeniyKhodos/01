const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Dimych',
                    img: 'https://static.mk.ru/upload/entities/2019/07/31/11/articles/detailPicture/74/2a/81/5e/f36f740bc1672e15668aaac619870fff.jpg'
                },
                {
                    id: 2,
                    name: 'Andrew',
                    img: 'https://static.mk.ru/upload/entities/2019/07/31/11/articles/detailPicture/74/2a/81/5e/f36f740bc1672e15668aaac619870fff.jpg'
                },
                {
                    id: 3,
                    name: 'Sveta',
                    img: 'https://static.mk.ru/upload/entities/2019/07/31/11/articles/detailPicture/74/2a/81/5e/f36f740bc1672e15668aaac619870fff.jpg'
                },
                {
                    id: 4,
                    name: 'Sasha',
                    img: 'https://static.mk.ru/upload/entities/2019/07/31/11/articles/detailPicture/74/2a/81/5e/f36f740bc1672e15668aaac619870fff.jpg'
                },
                {
                    id: 5,
                    name: 'Viktor',
                    img: 'https://static.mk.ru/upload/entities/2019/07/31/11/articles/detailPicture/74/2a/81/5e/f36f740bc1672e15668aaac619870fff.jpg'
                },
                {
                    id: 6,
                    name: 'Valera',
                    img: 'https://static.mk.ru/upload/entities/2019/07/31/11/articles/detailPicture/74/2a/81/5e/f36f740bc1672e15668aaac619870fff.jpg'
                }
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            newMessageBody: ''
        },
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Three message', likesCount: 11},
                {id: 4, message: 'Four', likesCount: 11},
                {id: 5, message: 'Five', likesCount: 11}
            ],
            newPostText: 'it-kamasutra.com'
        },
        sidebar: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'}
        ]
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('Hello')
    },

    subscribe(observer) {
        this._callSubscriber = observer; // паттерн наблюдатель observer
        // кто-то вызывает и подписывается на это событие
    },
    dispatch(action) {  // type: 'ADD-POST'
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body})
            this._callSubscriber(this._state);
        }
    }
    // action - объект
// Функция для моментального обновления state при написании постов,
// чтобы перерисовки происходила именно на его основе
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default store;
window.store = store;