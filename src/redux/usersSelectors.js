import { createSelector } from "reselect";

const getUsersSelector = (state) => {
  return state.usersPage.users;
};

// just an example of how reselect works
export const getUsers = createSelector(
  getUsersSelector,
  //getIsFetching,
  (users, /*isFetching*/) => users.filter((user) => true)
);

export const getUserCount = (state) => {
  return state.usersPage.userCount;
};
export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};
export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};
export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};
export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress;
};
