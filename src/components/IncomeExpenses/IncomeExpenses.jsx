import React from "react";
import { useGlobalContext } from "../../context";

export const IncomeExpenses = () => {
  const { transactions } = useGlobalContext();

  const amounts = transactions?.map((i) => i?.amount);

  const icome = amounts
    ?.filter((item) => item > 0)
    ?.reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts
      ?.filter((item) => item < 0)
      ?.reduce((acc, item) => (acc += item), 0) * -1;

  return (
    <>
      <section>
        <article>
          <h4>Income</h4>
          <p>{icome}</p>
        </article>
        <article>
          <h4>Expense</h4>
          <p>{expense}</p>
        </article>
      </section>
    </>
  );
};

