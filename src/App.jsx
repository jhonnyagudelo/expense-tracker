import React from "react";
import { GlobalProvider } from "./context";
import {
  Balance,
  ExpenseChart,
  IncomeExpenses,
  TransactionForm,
  TransactionList,
} from "./components";

export const App = () => {
  return (
    <GlobalProvider>
      <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
        <div className=" container mx-auto w-2/6">
          <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-2">
            <div className="">
              <h1 className="text-4x1 font-bold">Expense Tracker</h1>
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <article className="flex flex-col flex-s1">
              <TransactionList />
              <ExpenseChart />
            </article>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
};
