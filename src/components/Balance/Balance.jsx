import React from "react";
import { useGlobalContext } from "../../context";

export const Balance = () => {
  const { transactions } = useGlobalContext();

  const amounts = transactions?.map((i) => i?.amount);
  const total = amounts?.reduce((acc, item) => (acc += item), 0);
  return (
    <>
      <h3>Your Balance</h3>
      <h1>${total}</h1>
    </>
  );
};
