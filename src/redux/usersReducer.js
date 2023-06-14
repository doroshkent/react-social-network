import { userApi } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET_USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_USERS_COUNT = "users/SET_USERS_COUNT";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_PROGRESS = "users/TOGGLE_FOLLOWING_PROGRESS";

const initialState = {
  users: [],
  userCount: 0,
  pageSize: 10,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_USERS_COUNT:
      return {
        ...state,
        userCount: action.count,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(
              (userId) => userId !== action.userId
            ),
      };
    default:
      return state;
  }
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setUsersCount = (count) => ({ type: SET_USERS_COUNT, count });
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  const data = await userApi.getUsers(pageSize, currentPage);
  dispatch(setCurrentPage(currentPage));
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setUsersCount(data.totalCount));
};

const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleFollowingProgress(true, userId));
  const data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export const follow = (userId) => async (dispatch) => {
  await followUnfollowFlow(dispatch, userId, userApi.follow, followSuccess);
};

export const unfollow = (userId) => async (dispatch) => {
  await followUnfollowFlow(dispatch, userId, userApi.unfollow, unfollowSuccess);
};

export default usersReducer;
