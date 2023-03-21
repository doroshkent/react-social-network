const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

const initialState = {
  dialoguesList: [
    { id: 1, name: "Nikita", ava: require("../img/Nikita.png") },
    { id: 2, name: "Masha", ava: require("../img/Masha.png") },
    { id: 3, name: "Yuli", ava: require("../img/Yuli.png") },
    { id: 4, name: "Olga", ava: require("../img/Olga.png") },
    { id: 5, name: "Pan", ava: require("../img/Pan.png") },
  ],
  messages: [
    { id: 1, messageText: "Hi!", isSent: false },
    { id: 2, messageText: "Wanna study React tonight?", isSent: false },
    { id: 3, messageText: "Sure!", isSent: true },
    { id: 4, messageText: "Can't wait", isSent: true },
    { id: 5, messageText: "Great!", isSent: false },
  ],
  newMessageText: "",
};

const dialoguesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage = {
        id: 6,
        messageText: state.newMessageText,
        isSent: true,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: "",
      };
    case UPDATE_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newMessage,
      };
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({
  type: SEND_MESSAGE,
});

export const updateMessageTextActionCreator = (text) => ({
  type: UPDATE_MESSAGE_TEXT,
  newMessage: text,
});

export default dialoguesReducer;
