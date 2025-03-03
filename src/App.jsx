import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskManager from "./Projects/Task Manager/TaskManager";
import Home from "./Projects/Home";

function App() {
    return (
        <Router>
            <Routes>
                    <Route path="/" element={<Home />} />
                <Route path="/task_manager" element={<TaskManager />} />
            </Routes>
        </Router>
    );
}

export default App;