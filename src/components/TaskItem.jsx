function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="flex justify-between items-center bg-white shadow p-3 mb-2 rounded">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className={`text-lg ${task.completed ? "line-through text-gray-400" : ""}`}>
          {task.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 font-bold hover:text-red-700"
      >
        🗑️
      </button>
    </div>
  );
}

export default TaskItem;
