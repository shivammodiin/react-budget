import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

function AddContainer({
  handleCharge,
  charge,
  amount,
  handletype,
  handleSubmit,
  handleAmount,
  type,
  expenses,
}) {
  let types = [
    { value: "+", type: "inc" },
    { value: "-", type: "exp" },
  ];

  return (
    <div className="add">
      <div className="add__container">
        <select
          className="add__type"
          value={type}
          onChange={(e) => handletype(e)}
        >
          {types.map((item) => {
            return (
              <option key={item.value} value={item.type}>
                {item.value}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          onChange={(e) => handleCharge(e)}
          className="add__description"
          placeholder="Add description"
          value={charge}
        />
        <input
          type="number"
          onChange={(e) => handleAmount(e)}
          value={amount}
          className="add__value"
          placeholder="Value"
          required
        />
        <button className="add__btn" onClick={handleSubmit}>
          <AiOutlineCheckCircle />
        </button>
      </div>
    </div>
  );
}
export default AddContainer;
