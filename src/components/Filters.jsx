function Filters({ searchTerm, setSearchTerm, filter, setFilter }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 my-4">
      {/* 🔍 Search Bar */}
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border rounded w-full sm:w-1/2"
      />

      {/* 🔘 Filter Buttons */}
      <div className="flex gap-2 justify-center sm:justify-end">
        {["all", "completed", "pending"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded ${
              filter === f
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filters;
