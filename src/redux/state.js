import {rerenderEntireTree} from "../render";

const friendsData = [
    {id: 1, name: 'Nikita', ava: require('../img/Nikita.png')},
    {id: 2, name: 'Masha', ava: require('../img/Masha.png')},
    {id: 3, name: 'Yuli', ava: require('../img/Yuli.png')},
    {id: 4, name: 'Olga', ava: require('../img/Olga.png')},
    {id: 5, name: 'Pan', ava: require('../img/Pan.png')},
];

const state = {
    friends: friendsData,
    profilePage: {
        posts: [
            {id: 0, message: 'Whazzaaap', likesCount: 14},
            {id: 1, message: 'This post was made by props', likesCount: 16},
            {id: 2, message: 'My first post', likesCount: 143},
            {id: 3, message: 'Joke, that\'s one is first', likesCount: 14},
        ]
    },
    dialoguesPage: {
        dialogues: friendsData,
        messages: [
            {id: 1, messageText: 'Hi!', isSent: false},
            {id: 2, messageText: 'Wanna study React tonight?', isSent: false},
            {id: 3, messageText: 'Sure!', isSent: true},
            {id: 4, messageText: 'Can\'t wait', isSent: true},
            {id: 5, messageText: 'Great!', isSent: false},
        ],
    },
}

export let addPost = (postText) => {
    let post = {
        id: 5,
        message: postText,
        likesCount: 0,
    };
    state.profilePage.posts.push(post);
    rerenderEntireTree(state);
}


export default state;