import React from "react";
import { useGlobalContext } from "../../context";

export const IncomeExpenses = () => {
  const { transactions } = useGlobalContext();

  const amounts = transactions?.map((i) => i?.amount);

  const icome = amounts
    ?.filter((item) => item > 0)
    ?.reduce((acc, item) => (acc += item), 0)
    ?.toFixed(2);

  const expense =
    amounts
      ?.filter((item) => item < 0)
      ?.reduce((acc, item) => (acc += item), 0)
      ?.toFixed(2) * -1;

  return (
    <>
      <section>
        <article className="flex justify-between my-2">
          <h4>Income</h4>
          <p>{icome}</p>
        </article>
        <article className="flex justify-between my-2">
          <h4>Expense</h4>
          <p>{expense}</p>
        </article>
      </section>
    </>
  );
};
