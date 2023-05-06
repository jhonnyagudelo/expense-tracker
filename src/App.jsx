import React from "react";
import { GlobalProvider } from "./context";
import { Balance, Header, TransactionForm } from "./components";

export const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <TransactionForm />
      <h1>App</h1>
    </GlobalProvider>
  );
};
