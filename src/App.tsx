import { useMemo, useState } from "react";
import type { Todo } from "./types/todo";
import { useLocalStorage } from "./hooks/useLocalStorage";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import TodoFilter from "./Components/TodoFilter";

type Filter = "all" | "active" | "completed";

function App() {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);
  const [filter, setFilter] = useState<Filter>("all");

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: Date.now(),
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = useMemo(() => {
    if (filter === "active") return todos.filter((t) => !t.completed);
    if (filter === "completed") return todos.filter((t) => t.completed);
    return todos;
  }, [todos, filter]);

  const activeCount = todos.filter((t) => !t.completed).length;

  return (
    <div className="container">
      <h1>Todo App</h1>

      <TodoForm addTodo={addTodo} />

      <TodoFilter
        filter={filter}
        setFilter={setFilter}
        clearCompleted={clearCompleted}
      />

      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />

      <p>{activeCount} items left</p>
    </div>
  );
}

export default App;
