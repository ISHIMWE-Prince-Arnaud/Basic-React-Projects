function ExpenseItem({ expense, deleteExpense }) {
  return (
    <div className="expense-item">
      <div>
        <p><span>Category:</span> {expense.category}</p> 
        <p><span>Amount:</span> {expense.amount.toFixed(2)}$</p>
        <p><span>Date:</span> {expense.date}</p>
        <p><span>Description:</span> {expense.description}</p>
      </div>
      <button onClick={deleteExpense} className="btn btn-delete">Delete</button>
    </div>
  );
}

export default ExpenseItem;