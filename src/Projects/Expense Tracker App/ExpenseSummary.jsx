function ExpenseSummary({ expenses }) {
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  
  return (
    <div className="expense-summary">
      <h3>Total Expenses: ${totalExpenses.toFixed(2)}</h3>
    </div>
  );
}

export default ExpenseSummary;