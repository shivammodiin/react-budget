import React, { useState, useEffect } from "react";
import "./App.css";
// import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import TopPart from "./components/topPart/TopPart";
import BottomPart from "./components/BottomPart/BottomPart.js";
import { v4 as uuid } from "uuid";
import Alert from "./components/Alert";

// const initialExpenses = [
//   { id: uuid(), charge: "rent", amount: 1600, type: "inc" },
//   { id: uuid(), charge: "car Payment", amount: 1800, type: "inc" },
//   { id: uuid(), charge: "credit card bill", amount: 1200, type: "inc" },
//   { id: uuid(), charge: "credit card bill", amount: 1200, type: "exp" },
// ];

const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  const [charge, setCharge] = useState("");

  let [amount, setAmount] = useState("");

  const [type, setType] = useState("inc");

  const [id, setId] = useState("");

  const [alert, setAlert] = useState({ show: false });

  useEffect(() => {
    // console.log("We called useEffect");
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleCharge = (e) => {
    let target = e.target;

    setCharge(target.value);
  };

  const handleAmount = (e) => {
    let target = e.target;

    setAmount(parseInt(target.value));
  };

  const handletype = (e) => {
    let target = e.target;
    setType(target.value);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });

    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  const handleSubmit = () => {
    if (amount > 0 && charge.length > 0) {
      if (type === "inc") {
        amount = `${amount}`;
      } else {
        amount = `${amount}`;
      }

      amount = parseInt(amount);

      let singleData = { id: uuid(), charge, type, amount };

      setExpenses([...expenses, singleData]);
      handleAlert({
        type: "success",
        text: "Data Added",
      });
      setCharge("");
      setAmount("");
    } else {
      handleAlert({
        type: "danger",
        text:
          "Please Enter AMount Greater Then Zero and Description field should not be Empty",
      });
    }
  };

  const handleDelete = (id) => {
    let exp = expenses.filter((item) => item.id !== id);

    setExpenses([...exp]);

    handleAlert({
      type: "danger",
      text: "Data Deleted",
    });
  };

  const editItem = (id) => {
    let tempEdit = expenses.find((item) => item.id === id);
    // console.log(tempEdit);
    let { charge, amount, type } = tempEdit;
    let temExpenses = expenses.filter((item) => item.id !== id);
    setExpenses([...temExpenses]);
    // console.log(amount);
    setCharge(charge);
    setType(type);
    setAmount(amount);
  };

  return (
    <>
      <TopPart expenses={expenses} />
      <BottomPart
        handleCharge={handleCharge}
        amount={amount}
        charge={charge}
        handletype={handletype}
        handleAmount={handleAmount}
        handleSubmit={handleSubmit}
        type={type}
        expenses={expenses}
        editItem={editItem}
        handleDelete={handleDelete}
        handleAlert={handleAlert}
        alert={alert}
      />
    </>
  );
}

export default App;
