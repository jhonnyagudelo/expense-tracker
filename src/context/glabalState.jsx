import { createContext, useContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

export const Context = createContext();

const initalState = {
  transactions: [],
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initalState, () => {
    const localData = localStorage.getItem("transactions");
    return localData ? JSON.parse(localData) : initalState;
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state));
  }, [state]);

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  return (
    <Context.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("hubo un error en el context");
  }
  return context;
};
