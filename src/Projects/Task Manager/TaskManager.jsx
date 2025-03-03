import { useState, useEffect } from "react";
import { FaTrash, FaArrowUp, FaArrowDown, FaCheck, FaEdit, FaSearch } from "react-icons/fa";
import "./TaskManager.css"; 

function TaskManager() {
    const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem("tasks")) || []);
    const [taskInput, setTaskInput] = useState("");
    const [category, setCategory] = useState("Work");
    const [customCategory, setCustomCategory] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);
    const [editingText, setEditingText] = useState("");

    const categories = ["Work", "Personal", "Study", "Custom"];

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    function handleAddTask() {
        if (taskInput.trim() !== "") {
            const finalCategory = category === "Custom" ? customCategory.trim() || "Uncategorized" : category;
            setTasks([...tasks, { text: taskInput, completed: false, category: finalCategory }]);
            setTaskInput("");
            setCustomCategory("");
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
        setEditingText(tasks[index].text);
    }

    function handleSaveEdit(index) {
        if (editingText.trim() === "") return;
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, text: editingText } : task
        );
        setTasks(updatedTasks);
        setEditingIndex(null);
    }

    function filteredTasks() {
        return tasks.filter(task => 
            task.text.toLowerCase().includes(searchInput.toLowerCase()) ||
            task.category.toLowerCase().includes(searchInput.toLowerCase())
        );
    }

    return (
        <div className="task-manager">
            <h1 className="title">Task Manager</h1>
            <p className="subtitle">Organize your tasks efficiently</p>

            {/* Search Bar */}
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search tasks..."
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <button className="search-btn">
                    <FaSearch />
                </button>
            </div>

            {/* Task Input & Category Selection */}
            <div className="input-container">
                <input
                    type="text"
                    className="task-input"
                    placeholder="Enter task..."
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                />

                <select
                    className="category-select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    {categories.map((cat, idx) => (
                        <option key={idx} value={cat}>{cat}</option>
                    ))}
                </select>

                {category === "Custom" && (
                    <input
                        type="text"
                        className="custom-category-input"
                        placeholder="Enter custom category..."
                        value={customCategory}
                        onChange={(e) => setCustomCategory(e.target.value)}
                    />
                )}

                <button className="add-task-btn" onClick={handleAddTask}>
                    Add Task
                </button>
            </div>

            {/* Categorized Task Lists */}
            {categories.map((cat, index) => {
                const categorizedTasks = filteredTasks().filter(task => task.category === cat || (cat === "Custom" && !categories.includes(task.category)));

                if (categorizedTasks.length === 0) return null;

                return (
                    <div key={index} className={`category-section category-${cat.toLowerCase()}`}>
                        <h2>{cat === "Custom" ? "Other Categories" : cat}</h2>
                        {categorizedTasks.map((task, idx) => (
                            <div key={idx} className={`task-item ${task.completed ? "completed" : ""}`}>
                                {editingIndex === idx ? (
                                    <input
                                        type="text"
                                        className="edit-task-input"
                                        value={editingText}
                                        onChange={(e) => setEditingText(e.target.value)}
                                        onBlur={() => handleSaveEdit(idx)}
                                        onKeyDown={(e) => { if (e.key === "Enter") handleSaveEdit(idx); }}
                                        autoFocus
                                    />
                                ) : (
                                    <span className="task-text" onClick={() => handleEditTask(idx)}>
                                        {task.text} <span className="task-category">({task.category})</span>
                                    </span>
                                )}

                                <div className="task-buttons">
                                    <button className="complete-btn" onClick={() => handleToggleComplete(idx)}><FaCheck /></button>
                                    <button className="edit-btn" onClick={() => handleEditTask(idx)}><FaEdit /></button>
                                    <button className="move-up-btn" onClick={() => handleMoveUp(idx)}><FaArrowUp /></button>
                                    <button className="move-down-btn" onClick={() => handleMoveDown(idx)}><FaArrowDown /></button>
                                    <button className="remove-btn" onClick={() => handleRemoveTask(idx)}><FaTrash /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            })}
        </div>
    );
}

export default TaskManager;