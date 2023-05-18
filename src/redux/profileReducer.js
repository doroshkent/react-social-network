import { profileApi } from "../api/api";

const ADD_POST = "ADD_POST";
const UPDATE_POST_TEXT = "UPDATE_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

const initialState = {
  profileInfo: null,
  status: "",
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
          newPostText: action.text,
        },
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profileInfo: action.profileInfo,
      };
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status,
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
  text,
});
const setUserProfile = (profileInfo) => ({
  type: SET_USER_PROFILE,
  profileInfo,
});
const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  status,
});

export const getProfile = (userId) => (dispatch) => {
  profileApi.getUserProfile(userId).then((data) => {
    dispatch(setUserProfile(data));
  });
};

export const getStatus = (userId) => (dispatch) => {
  profileApi.getUserStatus(userId).then((data) => {
    dispatch(setUserStatus(data));
  });
};

export const updateStatus = (status) => (dispatch) => {
  profileApi.updateUserStatus(status).then((data) => {
    if (data.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  });
};

export default profileReducer;
