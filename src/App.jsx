import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import Filters from "./components/Filters";
import Stats from "./components/Stats";
import Suggestion from "./components/Suggestion";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("taskflow-tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("taskflow-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleToggleTask = (id) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };

  const handleDeleteTask = (id) => {
    const updated = tasks.filter((task) => task.id !== id);
    setTasks(updated);
  };

  const filteredTasks = tasks.filter((task) => {
    const matchFilter =
      filter === "all"
        ? true
        : filter === "completed"
        ? task.completed
        : !task.completed;

    const matchSearch = task.text.toLowerCase().includes(searchTerm.toLowerCase());

    return matchFilter && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6 max-w-xl mx-auto relative transition-all duration-300">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-4">
        TaskFlow
      </h1>

      <AddTask onAdd={handleAddTask} />

      <Filters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filter={filter}
        setFilter={setFilter}
      />

      <TaskList
        tasks={filteredTasks}
        onToggle={handleToggleTask}
        onDelete={handleDeleteTask}
      />

      <Suggestion tasks={tasks} />

      <Stats tasks={tasks} />
    </div>
  );
}

export default App;
