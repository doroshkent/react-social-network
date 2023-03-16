const initialState = {
    friends: [
        {id: 1, name: 'Nikita', ava: require('../img/Nikita.png')},
        {id: 2, name: 'Masha', ava: require('../img/Masha.png')},
        {id: 3, name: 'Yuli', ava: require('../img/Yuli.png')},
        {id: 4, name: 'Olga', ava: require('../img/Olga.png')},
        {id: 5, name: 'Pan', ava: require('../img/Pan.png')},
    ],
}

const sidebarReducer = (state = initialState, action) => {

    return state;
}

export default sidebarReducer;
