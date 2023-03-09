
const friendsData = [
    {id: 1, name: 'Nikita', ava: require('../img/Nikita.png')},
    {id: 2, name: 'Masha', ava: require('../img/Masha.png')},
    {id: 3, name: 'Yuli', ava: require('../img/Yuli.png')},
    {id: 4, name: 'Olga', ava: require('../img/Olga.png')},
    {id: 5, name: 'Pan', ava: require('../img/Pan.png')},
];

const store = {
    _state: {
        friends: {
            _friendsData: [
                {id: 1, name: 'Nikita', ava: require('../img/Nikita.png')},
                {id: 2, name: 'Masha', ava: require('../img/Masha.png')},
                {id: 3, name: 'Yuli', ava: require('../img/Yuli.png')},
                {id: 4, name: 'Olga', ava: require('../img/Olga.png')},
                {id: 5, name: 'Pan', ava: require('../img/Pan.png')},
            ],
        },
        sidebar: {
            friends: friendsData,
        },
        profilePage: {
            posts: [
                {id: 0, message: 'Whazzaaap', likesCount: 14},
                {id: 1, message: 'This post was made by props', likesCount: 16},
                {id: 2, message: 'My first post', likesCount: 143},
                {id: 3, message: 'Joke, that\'s one is first', likesCount: 14},
            ],
            newPostText: 'smth',
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
    },
    _callSubscriber() {
        console.log('updated')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        switch (action.type) {
            case 'ADD-POST':
                let post = {
                    id: 5,
                    message: this._state.profilePage.newPostText,
                    likesCount: 0,
                };
                this._state.profilePage.posts.push(post);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
                break;
            case 'UPDATE-POST-TEXT':
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber (this._state);
                break;
        }

    }
}



export default store;