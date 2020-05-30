import React from "react";

import AddContainer from "./AddContainer";
import Income from "./incomContainer";
import Expense from "./expenseContainer";
import Alert from "../Alert";

function BottomPart({
  handleCharge,
  handletype,
  charge,
  amount,
  handleSubmit,
  type,
  handleAmount,
  alert,
  handleAlert,
  expenses,
  editItem,
  handleDelete,
}) {
  return (
    <div className="bottom">
      <div className="alert-position">
        <AddContainer
          handleCharge={handleCharge}
          amount={amount}
          charge={charge}
          type={type}
          handleSubmit={handleSubmit}
          handleAmount={handleAmount}
          handletype={handletype}
          expenses={expenses}
          expenses={expenses}
        />
        {alert.show && <Alert type={alert.type} Text={alert.text} />}
      </div>

      <div className="container clearfix">
        <Income
          type={type}
          expenses={expenses}
          amount={amount}
          charge={charge}
          editItem={editItem}
          handleDelete={handleDelete}
        />
        <Expense
          type={type}
          expenses={expenses}
          amount={amount}
          editItem={editItem}
          charge={charge}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default BottomPart;
