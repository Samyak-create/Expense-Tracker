import { useState } from "react";

const ExpenseForm = ({ onSaveExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    
    if (!title || !amount || !date) {
      alert("Please fill all fields");
      return;
    }

    onSaveExpense({
      title,
      amount: Number(amount),
      date: new Date(date),
    });

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler} className="expense-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
