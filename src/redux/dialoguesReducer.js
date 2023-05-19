const SEND_MESSAGE = "SEND_MESSAGE";

const initialState = {
  dialoguesList: [
    { id: 1, name: "Nikita", ava: require("../assets/img/Nikita.png") },
    { id: 2, name: "Masha", ava: require("../assets/img/Masha.png") },
    { id: 3, name: "Yuli", ava: require("../assets/img/Yuli.png") },
    { id: 4, name: "Olga", ava: require("../assets/img/Olga.png") },
    { id: 5, name: "Pan", ava: require("../assets/img/Pan.png") },
  ],
  messages: [
    { id: 1, messageText: "Hi!", isSent: false },
    { id: 2, messageText: "Wanna study React tonight?", isSent: false },
    { id: 3, messageText: "Sure!", isSent: true },
    { id: 4, messageText: "Can't wait", isSent: true },
    { id: 5, messageText: "Great!", isSent: false },
  ],
};

const dialoguesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 6,
        messageText: action.message,
        isSent: true,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    default:
      return state;
  }
};

export const sendMessage = (message) => ({
  type: SEND_MESSAGE,
  message,
});

export default dialoguesReducer;
