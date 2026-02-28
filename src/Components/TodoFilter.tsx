type Filter = "all" | "active" | "completed";

interface Props {
  filter: Filter;
  setFilter: (filter: Filter) => void;
  clearCompleted: () => void;
}

function TodoFilter({ filter, setFilter, clearCompleted }: Props) {
  return (
    <div>
      <button onClick={() => setFilter("all")}>
        All
      </button>
      <button onClick={() => setFilter("active")}>
        Active
      </button>
      <button onClick={() => setFilter("completed")}>
        Completed
      </button>

      <button onClick={clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
}

export default TodoFilter;
