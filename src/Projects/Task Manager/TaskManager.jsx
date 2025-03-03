import { useState, useEffect } from "react";
import { FaTrash, FaArrowUp, FaArrowDown, FaCheck, FaEdit } from "react-icons/fa";
import "./TaskManager.css"; 

function TaskManager() {
    const [tasks, setTasks] = useState(() => {
        return JSON.parse(localStorage.getItem("tasks")) || [];
    });

    const [taskInput, setTaskInput] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);
    const [editingText, setEditingText] = useState(""); // Temporary state to store text while editing

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    function handleAddTask() {
        if (taskInput.trim() !== "") {
            setTasks([...tasks, { text: taskInput, completed: false }]);
            setTaskInput("");
        }
    }

    function handleRemoveTask(index) {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    function handleToggleComplete(index) {
        setTasks(tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        ));
    }

    function handleMoveUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function handleMoveDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function handleEditTask(index) {
        setEditingIndex(index);
        setEditingText(tasks[index].text); // Load the current text into temporary state
    }

    function handleSaveEdit(index) {
        if (editingText.trim() === "") return; // Prevent empty tasks
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, text: editingText } : task
        );
        setTasks(updatedTasks);
        setEditingIndex(null); // Exit edit mode
    }

    return (
        <div className="task-manager">
            <h1 className="title">Task Manager</h1>
            <p className="subtitle">Organize your tasks efficiently</p>

            <div className="input-container">
                <input
                    type="text"
                    className="task-input"
                    placeholder="Enter task..."
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                />
                <button className="add-task-btn" onClick={handleAddTask}>
                    Add Task
                </button>
            </div>

            <div className="task-list">
                {tasks.map((task, index) => (
                    <div key={index} className={`task-item ${task.completed ? "completed" : ""}`}>
                        {editingIndex === index ? (
                            <input
                                type="text"
                                className="edit-task-input"
                                value={editingText}
                                onChange={(e) => setEditingText(e.target.value)}
                                onBlur={() => handleSaveEdit(index)} // Save when user clicks away
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") handleSaveEdit(index); // Save on Enter
                                }}
                                autoFocus
                            />
                        ) : (
                            <span className="task-text" onClick={() => handleEditTask(index)}>
                                {task.text}
                            </span>
                        )}
                        
                        <div className="task-buttons">
                            <button className="complete-btn" onClick={() => handleToggleComplete(index)}>
                                <FaCheck />
                            </button>
                            <button className="edit-btn" onClick={() => handleEditTask(index)}>
                                <FaEdit />
                            </button>
                            <button className="move-btn move-up-btn" onClick={() => handleMoveUp(index)}>
                                <FaArrowUp />
                            </button>
                            <button className="move-btn move-down-btn" onClick={() => handleMoveDown(index)}>
                                <FaArrowDown />
                            </button>
                            <button className="remove-btn" onClick={() => handleRemoveTask(index)}>
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TaskManager;