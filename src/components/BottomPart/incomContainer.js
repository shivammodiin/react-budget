import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

function incomContainer({ type, expenses, editItem, handleDelete }) {
  let filtereIncome = expenses.filter((item) => {
    return item.type === "inc";
  });

  const income = filtereIncome.map((income) => {
    return (
      <div className="income__list" key={income.id}>
        <div className="item clearfix" id={income.id}>
          <>
            <div className="item__description text-capitalize">
              {income.charge}
            </div>
            <div className="right clearfix">
              <>
                <div className="item__value">+ {income.amount}</div>
                <button
                  className="item__edit--btn edit-dlt"
                  onClick={() => editItem(income.id)}
                >
                  <MdEdit />
                </button>
                <div className="item__delete">
                  <button
                    className="item__delete--btn edit-dlt"
                    onClick={() => handleDelete(income.id)}
                  >
                    <MdDelete />
                  </button>
                </div>
              </>
            </div>
          </>
        </div>
      </div>
    );
  });
  return (
    <div className="income mt-3">
      <h2 className="icome__title">Income</h2>
      {income}
    </div>
  );
}

export default incomContainer;
