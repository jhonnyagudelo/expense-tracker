import React from "react";
import { useGlobalContext } from "../../../../context";
import { TransactionItem } from "../TransactionItem";

export const TransactionList = () => {
  const { transactions } = useGlobalContext();
  return (
    <>
      <section>
        <h3 className="text-slate-300 text-xl font-bold block w-full">
          History
        </h3>
        <ul>
          {transactions.map((transaction) => (
            <article key={transaction?.id}>
              <TransactionItem transaction={transaction} />
            </article>
          ))}
        </ul>
      </section>
    </>
  );
};
