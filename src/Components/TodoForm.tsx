import { useState } from "react";

interface Props {
  addTodo: (text: string) => void;
}

function TodoForm({ addTodo }: Props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTodo(input.trim());
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="Add todo"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add a task..."
        required
      />
      <button type="submit" aria-label="Add todo">Add</button>
    </form>
  );
}

export default TodoForm;
