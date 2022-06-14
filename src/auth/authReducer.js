export const initializeState = () => {
  return localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {
        isAuthenticated: false,
        data: {},
      };
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        data: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        data: {},
      };
    default:
      return state;
  }
};
