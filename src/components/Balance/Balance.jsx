import React from "react";
import { useGlobalContext } from "../../context";

export const Balance = () => {
  const { transactions } = useGlobalContext();

  const amounts = transactions?.map((i) => i?.amount);
  const total = amounts?.reduce((acc, item) => (acc += item), 0);
  return (
    <>
      <h3 className="flex justify-between">Your Balance</h3>
      <h1 className="text-2x1 font-bold">${total}</h1>
    </>
  );
};
