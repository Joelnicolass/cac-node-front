import { createContext, useEffect, useReducer } from "react";
import { authReducer, initializeState } from "./authReducer";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, authDispatch] = useReducer(authReducer, {}, initializeState);

  useEffect(() => {
    if (auth.isAuthenticated) {
      localStorage.setItem("auth", JSON.stringify(auth));
    } else {
      localStorage.removeItem("auth");
    }
  }, [auth]);

  return (
    <AuthContext.Provider
      value={{
        auth,
        authDispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
