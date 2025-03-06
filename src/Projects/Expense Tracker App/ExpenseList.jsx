import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, deleteExpense }) {
  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        expenses.map((expense, index) => (
          <ExpenseItem key={index} expense={expense} deleteExpense={() => deleteExpense(index)} />
        ))
      )}
    </div>
  );
}

export default ExpenseList;