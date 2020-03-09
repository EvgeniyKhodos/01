const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {...state};
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }
        case SEND_MESSAGE: {
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];

            let body = stateCopy.newMessageBody;

            stateCopy.newMessageBody = '';
            stateCopy.messages.push({id: 6, message: body});
            return stateCopy;
        }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;