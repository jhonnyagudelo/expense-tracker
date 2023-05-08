import React from "react";
import { useGlobalContext } from "../../../../context";
import { TransactionItem } from "../TransactionItem";

export const TransactionList = () => {
  const { transactions } = useGlobalContext();
  return (
    <>
      <section>
        <h3>History !!!!</h3>
        {transactions.map((transaction) => (
          <article key={transaction?.id}>
            <TransactionItem transaction={transaction} />;
          </article>
        ))}
      </section>
    </>
  );
};
