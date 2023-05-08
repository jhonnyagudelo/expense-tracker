import React from "react";
import { GlobalProvider } from "./context";
import {
  Balance,
  Header,
  IncomeExpenses,
  TransactionForm,
  TransactionList,
} from "./components";

export const App = () => {
  return (
    <GlobalProvider>
      <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
        <div className="bg-zinc-800 p-10 rounded-lg flex">
          <div className="">
            <Header />
            <IncomeExpenses />
            <Balance />
            <TransactionList />
          </div>
          <TransactionForm />
        </div>
      </div>
    </GlobalProvider>
  );
};
