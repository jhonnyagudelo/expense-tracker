import React from "react";
import { useGlobalContext } from "../../../../context";

export const TransactionItem = ({ transaction }) => {
  const { deleteTransaction } = useGlobalContext();
  return (
    <>
      <p>
        {transaction?.description}:<span>{transaction?.amount}</span>
      </p>
      <button
        onClick={() => {
          deleteTransaction(transaction?.id);
        }}
      >
        X
      </button>
    </>
  );
};
