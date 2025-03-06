import { useState, useEffect } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import ExpenseSummary from "./ExpenseSummary";
import "./ExpenseTracker.css";

function ExpenseTracker() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  function addExpense(expense) {
    setExpenses([...expenses, expense]);
  }

  function deleteExpense(index) {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  }

  const filteredExpenses =
    filter === "All" ? expenses : expenses.filter(expense => expense.category === filter);

  return (
    <div>
      <h1 className="title">Expense Tracker</h1>
      <div className="container">
        <ExpenseForm addExpense={addExpense} />
        
        <div className="filter-container">
          <label>Filter by Category:</label>
          <select onChange={(e) => setFilter(e.target.value)} className="filter-select">
            <option value="All">All</option>
            {Array.from(new Set(expenses.map((exp) => exp.category))).map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <ExpenseSummary expenses={filteredExpenses} />
        <ExpenseList expenses={filteredExpenses} deleteExpense={deleteExpense} />
      </div>
    </div>
  );
}

export default ExpenseTracker;