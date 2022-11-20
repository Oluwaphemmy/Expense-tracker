import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  /*const [userInput, setUserInput] = useState({
    setEnteredTitle: "",
    setEnteredAmount: "",
    setEnteredDate: "",
  });*/

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //  ...userInput,
    // setEnteredTitle: event.target.value,
    //  });

    //FOR DEPENDING ON PREV STATE
    /*setUserInput((prevState)=>{
    return{...prevState, 
    setEnteredTitle: event.target.value}
})*/
  }
  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);

    /*setUserInput({
      ...userInput,
      setEnteredAmount: event.target.value,
    });*/
  }
  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);

    /*setUserInput({
      ...userInput,
      setEnteredDate: event.target.value,
    });*/
  }
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Items</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
