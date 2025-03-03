import React from "react";
import TaskManager from "./Projects/Task Manager/TaskManager";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/task_manager" element={<TaskManager />} />
            </Routes>
        </Router>
    );
}

export default App;