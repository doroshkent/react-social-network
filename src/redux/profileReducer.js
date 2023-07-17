import { profileApi } from "api/api";
import { v4 } from "uuid";

const ADD_POST = "profile/ADD_POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_USER_STATUS = "profile/SET_USER_STATUS";
const DELETE_POST = "profile/DELETE_POST";
const UPDATE_PHOTO = "profile/UPDATE_PHOTO";

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
    case UPDATE_PHOTO:
      return {
        ...state,
        profileInfo: {
          ...state.profileInfo,
          photos: action.photos,
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
const updatePhotoSuccess = (photos) => ({
  type: UPDATE_PHOTO,
  photos,
});

export const getProfile = (userId) => async (dispatch) => {
  const data = await profileApi.getUserProfile(userId);
  dispatch(setUserProfile(data));
};

export const getStatus = (userId) => async (dispatch) => {
  const data = await profileApi.getUserStatus(userId);
  dispatch(setUserStatus(data));
};

export const updateStatus = (status) => async (dispatch) => {
  const data = await profileApi.updateUserStatus(status);
  if (data.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};

export const updatePhoto = (photo) => async (dispatch) => {
  const data = await profileApi.updateProfilePhoto(photo);
  if (data.resultCode === 0) {
    dispatch(updatePhotoSuccess(data.data.photos));
  }
};

export const saveProfileData = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.id;
  const data = await profileApi.updateProfile(profile);
  if (data.resultCode === 0) {
    dispatch(getProfile(userId));
  } else {
    throw new Error(`${data.messages[0]}`);
  }
};

export default profileReducer;
