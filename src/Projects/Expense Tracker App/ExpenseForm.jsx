import { useState } from "react";

function ExpenseForm({ addExpense }) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!amount || !category || !description || !date) {
      return;
    }
    addExpense({ 
      amount: parseFloat(amount), 
      category, 
      description, 
      date 
    });
    setAmount("");
    setCategory("");
    setDescription("");
    setDate("");
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" className="input-field" />
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" className="input-field" />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="input-field" />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="input-field" />
      <button type="submit" className="btn btn-add">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;