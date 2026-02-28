import type { Todo } from "../types/todo";

interface Props {
  todo: Todo;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

function TodoItem({ todo, toggleTodo, deleteTodo }: Props) {
  return (
    <li>
      <span
        onClick={() => toggleTodo(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {todo.text}
      </span>

      <button
        onClick={() => deleteTodo(todo.id)}
        aria-label={`Delete ${todo.text}`}
        title="Delete todo"
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
