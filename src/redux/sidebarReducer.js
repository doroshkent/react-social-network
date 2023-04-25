const initialState = {
  friends: [
    { id: 1, name: "Nikita", ava: require("../assets/img/Nikita.png") },
    { id: 2, name: "Masha", ava: require("../assets/img/Masha.png") },
    { id: 3, name: "Yuli", ava: require("../assets/img/Yuli.png") },
    { id: 4, name: "Olga", ava: require("../assets/img/Olga.png") },
    { id: 5, name: "Pan", ava: require("../assets/img/Pan.png") },
  ],
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
