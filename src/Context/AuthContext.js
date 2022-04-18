import { createContext, useContext, useReducer } from "react";

import { authReducer } from "../Reducers/AuthReducer";

const AuthContext = createContext(null);

const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const oldToken = localStorage.getItem("token");

  const [stateAuth, dispatchAuth] = useReducer(authReducer, {
    userDetails: [],
    token: oldToken ?? null,
    isAuth: oldToken ? true : false,
  });

  return (
    <AuthContext.Provider value={{ stateAuth, dispatchAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthContextProvider };
