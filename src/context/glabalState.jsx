import { createContext, useContext } from "react";

export const Context = createContext();

export const GlobalProvider = ({ children }) => {
  return <Context.Provider value={{ total: 100 }}>{children}</Context.Provider>;
};

export const useGlobalContext = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("hubo un error en el context");
  }
  return context;
};
