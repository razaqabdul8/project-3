import React, { createContext, useReducer, useContext } from "react";

const LoginContext = createContext({
  id: "",
  email: "",
  isAuthenticated: false,
  routeToListPage: false
});
const { Provider } = LoginContext;

function reducer(state, action) {
  switch (action.type) {
  case "login":    
    return {...state,
        id: action.res.data._id,
        email: action.res.data.email,
        isAuthenticated: true
      };
  case "logout":
    return  {
        ...state,
        id: "",
        email: "",
        isAuthenticated: false,
        routeToListPage: false
      };
  case "routelist":
    return  {
      ...state,
      routeToListPage: true      
    };
  case "routeuser":
    return  {
      ...state,
      routeToListPage: false
    };
  default:
    return state;
  }
}

function LoginProvider({ value = {}, ...props }) {
  const [state, dispatch] = useReducer(reducer, []);

  return <Provider value={[state, dispatch]} {...props} />;
}

function useLoginContext() {
  return useContext(LoginContext);
}

export { LoginProvider, useLoginContext };
