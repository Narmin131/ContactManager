import React,{ createContext, useReducer,useEffect  } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  contacts: [],
};

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState, () => {
    const localData  = localStorage.getItem("contacts");
    return localData ? JSON.parse(localData) : []
  })
    
    

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(state));
  }, [state])

  const ADD_CONTACT = (contacts) => {
    dispatch({
      type: "ADD_CONTACT",
      payload: contacts,
    });
  };

  const REMOVE_CONTACT = (id) => {
    dispatch({
      type: "REMOVE_CONTACT",
      payload: id,
    });
  };

  const UPDATE_CONTACT = (contacts) => {
    dispatch({
      type: "UPDATE_CONTACT",
      payload: contacts,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        contacts: state.contacts,
        ADD_CONTACT,
        REMOVE_CONTACT,
        dispatch,
        UPDATE_CONTACT,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
