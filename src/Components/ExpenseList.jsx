import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ items, onDelete }) => {
  return (
    <div className="expense-list">
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          onDelete={onDelete}   
        />
      ))}
    </div>
  );
};

export default ExpenseList;
