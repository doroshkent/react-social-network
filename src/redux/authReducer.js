import { authApi } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setUserAuthData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
});

export const getUserAuthData = () => (dispatch) => {
  authApi.me().then((data) => {
    if (data.resultCode === 0) {
      let { id, email, login } = data.data;
      dispatch(setUserAuthData(id, email, login, true));
    }
  });
};

export const login = (email, password, rememberMe) => (dispatch) => {
  authApi.login(email, password, rememberMe).then((data) => {
    if (data.resultCode === 0) {
      dispatch(getUserAuthData());
    }
  });
};

export const logout = () => (dispatch) => {
  authApi.logout().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setUserAuthData(null, null, null, false));
    }
  });
};

export default authReducer;
