import React from "react";
import { createRef } from "react";

function TopPart({ expenses }) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const income = expenses.filter((item) => {
    return item.type === "inc";
  });

  const expense = expenses.filter((item) => {
    return item.type === "exp";
  });

  const constIncomeTotal = income.reduce((acc, cur) => {
    return (acc += cur.amount);
  }, 0);

  const constExpenseTotal = expense.reduce((acc, cur) => {
    return (acc += cur.amount);
  }, 0);
  let TotalPercentage;
  if (constIncomeTotal > 0 && constExpenseTotal > 0) {
    TotalPercentage = (constExpenseTotal / constIncomeTotal) * 100;
  } else {
    TotalPercentage = -1;
  }
  TotalPercentage = parseFloat(TotalPercentage.toFixed(1));
  const TotalBudget = constIncomeTotal - constExpenseTotal;

  if (
    constIncomeTotal > 0 &&
    constExpenseTotal > 0 &&
    constIncomeTotal > constExpenseTotal
  ) {
    TotalPercentage = "+" + TotalPercentage;
  } else if (
    constIncomeTotal > 0 &&
    constExpenseTotal > 0 &&
    constIncomeTotal < constExpenseTotal
  ) {
    TotalPercentage = "-" + TotalPercentage;
  }

  // console.log(income);

  return (
    <div className="top">
      <div className="budget">
        <div className="budget__title">
          Available Budget in{" "}
          <span className="budget__title--month">
            {monthNames[new Date().getMonth()]}
          </span>
          :
        </div>

        <div className="budget__value">${TotalBudget}</div>

        <div className="budget__income clearfix">
          <div className="budget__income--text">Income</div>
          <div className="right">
            <div className="budget__income--value">+ {constIncomeTotal}</div>
            <div className="budget__income--percentage">&nbsp;</div>
          </div>
        </div>

        <div className="budget__expenses clearfix">
          <div className="budget__expenses--text">Expenses</div>
          <div className="right clearfix">
            <div className="budget__expenses--value">- {constExpenseTotal}</div>
            <div className="budget__expenses--percentage">
              {TotalPercentage}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopPart;
