import { getUserAuthData } from "./authReducer";

const INIT_SUCCEEDED = "app/INITIALIZING_SUCCEEDED";

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_SUCCEEDED:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const initSucceeded = () => ({
  type: INIT_SUCCEEDED,
});

export const initializeApp = () => async (dispatch) => {
  let promise = dispatch(getUserAuthData());
  // in case there's a lot of promises and I need to wait all of them
  await Promise.all([promise]);
  dispatch(initSucceeded());
};

export default appReducer;
