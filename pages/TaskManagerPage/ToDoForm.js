import { useState } from "react";

export default function TodoForm({ addTodo }) {
  /* You need to keep track, of the user is putting in - useState */
  const [value, setValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task here .."
        value={value}
        onChange={(event) =>
          setValue(event.target.value)
        } /* value that will be logged by the user */
      />
      <button type="submit">Add task</button>
    </form>
  );
}
