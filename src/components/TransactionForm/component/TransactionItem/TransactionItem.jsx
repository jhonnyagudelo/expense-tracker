import React from "react";
import { useGlobalContext } from "../../../../context";

export const TransactionItem = ({ transaction }) => {
  const { deleteTransaction } = useGlobalContext();
  return (
    <>
      <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full felx justify-between items-center">
        <p className="text-sm">
          {transaction?.description}: <span>${transaction?.amount}</span>
        </p>
        <button
          onClick={() => {
            deleteTransaction(transaction?.id);
          }}
        >
          X
        </button>
      </li>
    </>
  );
};
