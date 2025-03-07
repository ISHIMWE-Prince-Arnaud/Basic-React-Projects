import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskManager from "./Projects/Task Manager App/TaskManager";
import Home from "./Projects/Home";
import Weather from "./Projects/Weather App/Weather";
import ExpenseTracker from "./Projects/Expense Tracker App/Expense Tracker";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task_manager" element={<TaskManager />} />
        <Route path="/weather_app" element={<Weather />} />
        <Route path="/expense_tracker" element={<ExpenseTracker />} />
      </Routes>
    </Router>
  );
}

export default App;