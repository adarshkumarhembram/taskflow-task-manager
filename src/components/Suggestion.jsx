function Suggestion({ tasks }) {
  const pendingTasks = tasks.filter((t) => !t.completed);

  // Sort by oldest first
  const topTask = pendingTasks.length
    ? [...pendingTasks].sort((a, b) => a.id - b.id)[0]
    : null;

  return (
    <div className="bg-yellow-100 dark:bg-yellow-800 text-yellow-900 dark:text-yellow-100 p-4 rounded shadow mt-4">
      <h2 className="text-lg font-semibold mb-1">🧠 AI Suggestion</h2>
      {topTask ? (
        <p>
          👉 <span className="font-semibold">{topTask.text}</span> is your top pending task.
          <br />
          <span className="italic text-sm">“Let’s finish what we started.”</span>
        </p>
      ) : (
        <p>🎉 You’re all caught up! No pending tasks.</p>
      )}
    </div>
  );
}

export default Suggestion;
