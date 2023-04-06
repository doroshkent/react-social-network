const ADD_POST = "ADD_POST";
const UPDATE_POST_TEXT = "UPDATE_POST_TEXT";

const initialState = {
  profileInfo: "Anastasiya",
  myPosts: {
    posts: [
      { id: 0, message: "Whazzaaap", likesCount: 14 },
      { id: 1, message: "This post was made by props", likesCount: 16 },
      { id: 2, message: "My first post", likesCount: 143 },
      { id: 3, message: "Joke, that's one is first", likesCount: 14 },
    ],
    newPostText: "",
  },
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: state.myPosts.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        myPosts: {
          ...state.myPosts,
          posts: [...state.myPosts.posts, newPost],
          newPostText: "",
        },
      };
    case UPDATE_POST_TEXT:
      return {
        ...state,
        myPosts: {
          ...state.myPosts,
          newPostText: action.newText,
        },
      };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updatePostTextActionCreator = (text) => ({
  type: UPDATE_POST_TEXT,
  newText: text,
});

export default profileReducer;
