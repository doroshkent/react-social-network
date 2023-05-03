import { profileApi } from "../api/api";

const ADD_POST = "ADD_POST";
const UPDATE_POST_TEXT = "UPDATE_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialState = {
  profileInfo: null,
  myPosts: {
    posts: [
      { id: 1, message: "My first post", likesCount: 143 },
      { id: 2, message: "This post was made by props", likesCount: 16 },
      { id: 3, message: "Вернула стену вместо Дурова", likesCount: 14 },
    ],
    newPostText: "",
  },
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
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
    case SET_USER_PROFILE:
      return {
        ...state,
        profileInfo: action.profileInfo,
      };
    default:
      return state;
  }
};

export const addPost = () => ({
  type: ADD_POST,
});
export const updatePostText = (text) => ({
  type: UPDATE_POST_TEXT,
  newText: text,
});
export const setUserProfile = (profileInfo) => ({
  type: SET_USER_PROFILE,
  profileInfo,
});

export const getProfile = (userId) => {
  return (dispatch) => {
    if (!userId) {
      userId = 2;
    }
    profileApi.getUserProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export default profileReducer;
