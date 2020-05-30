import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

function expenseContainer({ editItem, expenses, handleDelete }) {
  let filtereExpense = expenses.filter((item) => {
    return item.type === "exp";
  });

  const constExpenseTotal = filtereExpense.reduce((acc, cur) => {
    return (acc += cur.amount);
  }, 0);

  // console.log(constExpenseTotal);

  const expense = filtereExpense.map((expense) => {
    return (
      <div className="expenses__list" key={expense.id}>
        <div className="item clearfix " id={expense.id}>
          <div className="item__description text-capitalize">
            {expense.charge}
          </div>
          <div className="right clearfix">
            <div className="item__value">- {expense.amount}</div>
            <div className="item__percentage">
              {parseFloat((expense.amount / constExpenseTotal) * 100).toFixed(
                1
              )}
              %
            </div>
            <button
              className="item__edit--btn edit-dlt"
              onClick={() => editItem(expense.id)}
            >
              <MdEdit />
            </button>
            <div className="item__delete ">
              <button
                className="item__delete--btn edit-dlt"
                onClick={() => handleDelete(expense.id)}
              >
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="expenses mt-3">
      <h2 className="expenses__title">Expenses</h2>
      {expense}
    </div>
  );
}

export default expenseContainer;
