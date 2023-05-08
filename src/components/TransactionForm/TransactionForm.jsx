import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import { TransactionList } from "./component";

export const TransactionForm = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const { addTransaction } = useGlobalContext();

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      description,
      amount: +amount,
      id: window.crypto.randomUUID(),
    });
  };

  return (
    <>
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
        />
        <input
          type="number"
          placeholder="00.00"
          step="0.01"
          onChange={(e) => setAmount(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
        />
        <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full">
          Add transaction
        </button>
      </form>
      
    </>
  );
};
