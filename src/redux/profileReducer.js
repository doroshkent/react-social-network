import { profileApi } from "../api/api";
import { v4 } from "uuid";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const DELETE_POST = "DELETE_POST";

const initialState = {
  profileInfo: null,
  status: "",
  myPosts: {
    posts: [
      { id: 1, message: "My first post", likesCount: 143 },
      { id: 2, message: "This post was made by props", likesCount: 16 },
      { id: 3, message: "Вернула стену вместо Дурова", likesCount: 14 },
    ],
  },
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: v4(),
        message: action.postText,
        likesCount: 0,
      };
      return {
        ...state,
        myPosts: {
          ...state.myPosts,
          posts: [...state.myPosts.posts, newPost],
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
    case DELETE_POST:
      return {
        ...state,
        myPosts: {
          ...state.myPosts,
          posts: state.myPosts.posts.filter(
            (post) => post.id !== action.postId
          ),
        },
      };
    default:
      return state;
  }
};

export const addPost = (postText) => ({
  type: ADD_POST,
  postText,
});
const setUserProfile = (profileInfo) => ({
  type: SET_USER_PROFILE,
  profileInfo,
});
const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  status,
});
export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
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
