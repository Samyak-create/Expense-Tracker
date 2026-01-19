import { useState } from "react";
import NewExpense from "./Components/NewExpense";
import ExpenseList from "./Components/ExpenseList";

const DUMMY_EXPENSES = [
  { id: "e1", title: "Groceries", amount: 900, date: new Date(2024, 7, 14) },
  { id: "e2", title: "New TV", amount: 34000, date: new Date(2024, 2, 12) },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prev) => [expense, ...prev]);
  };

  const deleteExpenseHandler = (id) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  };

  return (
    <div className="app-container">
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList items={expenses} onDelete={deleteExpenseHandler} />
    </>
    </div>
  );
}

export default App;
