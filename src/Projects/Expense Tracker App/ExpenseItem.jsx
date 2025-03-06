function ExpenseItem({ expense, deleteExpense }) {
  return (
    <div className="expense-item">
      <p>
        <span className="expense-description">{expense.description}</span> -  
        <span className="expense-amount">${expense.amount.toFixed(2)}</span>  
        <span className="expense-category">({expense.category})</span>  
        <span className="expense-date">[{expense.date}]</span>
      </p>
      <button onClick={deleteExpense} className="btn btn-delete">Delete</button>
    </div>
  );
}

export default ExpenseItem;