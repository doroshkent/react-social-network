const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const dialoguesReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let message = {
                id: 6,
                messageText: state.newMessageText,
                isSent: true,
            };
            state.messages.push(message);
            state.newMessageText = '';
            return state;
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE,
})

export const updateMessageTextActionCreator = (text) => ({
    type: UPDATE_MESSAGE_TEXT,
    newMessage: text,
})

export default dialoguesReducer;
