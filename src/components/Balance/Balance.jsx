import React from "react";
import { useGlobalContext } from "../../context";

export const Balance = () => {
  const { total } = useGlobalContext();
  return (
    <>
      <h1>Balance</h1>
      <h2>{`Total: ${total}`}</h2>
    </>
  );
};
