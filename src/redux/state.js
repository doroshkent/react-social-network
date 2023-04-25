const friendsData = [
  { id: 1, name: "Nikita", ava: require("../assets/img/Nikita.png") },
  { id: 2, name: "Masha", ava: require("../assets/img/Masha.png") },
  { id: 3, name: "Yuli", ava: require("../assets/img/Yuli.png") },
  { id: 4, name: "Olga", ava: require("../assets/img/Olga.png") },
  { id: 5, name: "Pan", ava: require("../assets/img/Pan.png") },
];

const state = {
  friends: friendsData,
  profilePage: {
    posts: [
      { id: 0, message: "Whazzaaap", likesCount: 14 },
      { id: 1, message: "This post was made by props", likesCount: 16 },
      { id: 2, message: "My first post", likesCount: 143 },
      { id: 3, message: "Joke, that's one is first", likesCount: 14 },
    ],
  },
  dialoguesPage: {
    dialogues: friendsData,
    messages: [
      { id: 1, messageText: "Hi!", isSent: false },
      { id: 2, messageText: "Wanna study React tonight?", isSent: false },
      { id: 3, messageText: "Sure!", isSent: true },
      { id: 4, messageText: "Can't wait", isSent: true },
      { id: 5, messageText: "Great!", isSent: false },
    ],
  },
};

export default state;
