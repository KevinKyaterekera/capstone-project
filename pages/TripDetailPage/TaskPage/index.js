import useLocalStorageState from "use-local-storage-state";
import PrimaryLink from "../../../components/PrimaryLink";
import { useState } from "react";

export default function TaskForm({ tripId }) {
  const [value, setValue] = useState();
  const [todos, setTodos] = useLocalStorageState("todo", {
    defaultValue: [],
  });

  const addTodo = (todoText) => {
    const newTodo = { text: todoText, tripId };
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = (removeTodo) =>
    setTodos(todos.filter((todo) => todo.text !== removeTodo.text));

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value) {
      addTodo(value);
      setValue("");
    }
  };
  console.log(todos);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>
            Trip Task Manager - Du hast
            {todos.filter((todo) => todo.tripId === tripId).length}
            Aufgaben
          </legend>
          <input
            type="text"
            name="todo"
            placeholder="add a task.."
            value={value}
            onChange={(event) => setValue(event.target.value)}
          ></input>
          <button type="submit">Add task</button>
          <ul>
            {todos
              .filter((todo) => todo.tripId === tripId)
              .map((todo, index) => (
                <>
                  <li key={index}>{todo.text}</li>
                  <button>edit</button>
                  <button onClick={() => deleteTodo(todo)}>delete</button>
                </>
              ))}
          </ul>
        </fieldset>
      </form>
      <PrimaryLink href="/">Back to overview</PrimaryLink>
    </>
  );
}
