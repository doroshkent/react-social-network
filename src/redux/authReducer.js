import { authApi } from "api/api";

const SET_USER_DATA = "auth/SET_USER_DATA";

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

export const getUserAuthData = () => async (dispatch) => {
  const data = await authApi.me();
  if (data.resultCode === 0) {
    let { id, email, login } = data.data;
    dispatch(setUserAuthData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  const data = await authApi.login(email, password, rememberMe);
  if (data.resultCode === 0) {
    dispatch(getUserAuthData());
  } else {
    throw new Error(`${data.messages[0]}`);
  }
};

export const logout = () => async (dispatch) => {
  const data = await authApi.logout();
  if (data.resultCode === 0) {
    dispatch(setUserAuthData(null, null, null, false));
  }
};

export default authReducer;
