const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
  users: [
    /*{
      id: 1,
      followed: true,
      fullName: "Nikita",
      status: "Birds watching",
      ava: require("../img/Nikita.png"),
      location: {
        city: "Poznan",
        country: "Poland",
      },
    },
    {
      id: 2,
      followed: true,
      fullName: "Masha",
      status: "Saving people",
      ava: require("../img/Masha.png"),
      location: {
        city: "Minsk",
        country: "Belarus",
      },
    },
    {
      id: 3,
      followed: true,
      fullName: "Yuli",
      status: "Enjoying my life",
      ava: require("../img/Yuli.png"),
      location: {
        city: "Tbilisi",
        country: "Georgia",
      },
    },
    {
      id: 4,
      followed: true,
      fullName: "Olga",
      status: "Looking for good wine",
      ava: require("../img/Olga.png"),
      location: {
        city: "Minsk",
        country: "Belarus",
      },
    },
    {
      id: 5,
      followed: true,
      fullName: "Pan",
      status: "Waiting for vacation",
      ava: require("../img/Pan.png"),
      location: {
        city: "Ayia Napa",
        country: "Cyprus",
      },
    },*/
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
