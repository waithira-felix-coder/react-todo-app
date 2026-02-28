type Filter = "all" | "active" | "completed";

interface Props {
  filter: Filter;
  setFilter: (filter: Filter) => void;
  clearCompleted: () => void;
}

function TodoFilter({ filter, setFilter, clearCompleted }: Props) {
  return (
    <div role="group" aria-label="Filter todos">
      <button aria-pressed={filter === "all"} onClick={() => setFilter("all")}>
        All
      </button>
      <button
        aria-pressed={filter === "active"}
        onClick={() => setFilter("active")}
      >
        Active
      </button>
      <button
        aria-pressed={filter === "completed"}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>

      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
}

export default TodoFilter;
