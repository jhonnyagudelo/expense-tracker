import React from "react";
import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalContext } from "../../context";

export const ExpenseChart = () => {
  const { transactions } = useGlobalContext();

  const totalIcome = transactions
    ?.filter((i) => i.amount > 0)
    ?.reduce((acc, item) => (acc += item.amount), 0);

  const totalExpense =
    transactions
      ?.filter((i) => i.amount < 0)
      ?.reduce((acc, item) => (acc += item.amount), 0) * -1;

  const totalExpensesPercentage = Math.round((totalExpense / totalIcome) * 100);
  const totalIncomePercentage = 100 - totalExpensesPercentage;

  return (
    <>
      <VictoryPie
        colorScale={["#E74C3C", "#2ECC71"]}
        data={[
          { x: "expense", y: totalExpensesPercentage },
          { x: "Icomes", y: totalIncomePercentage },
        ]}
        animate={{
          duration: 200,
        }}
        labels={({ datum }) => `${datum.y}%`}
        labelComponent={<VictoryLabel angle={45} style={{ fill: "white" }} />}
      />
    </>
  );
};
