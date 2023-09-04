import useLocalStorageState from "use-local-storage-state";
import PrimaryLink from "../../../components/PrimaryLink";
import { useState } from "react";
import { styled } from "styled-components";

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
            Trip Task Manager - You have:
            {todos.filter((todo) => todo.tripId === tripId).length} task left
          </legend>
          <input
            type="text"
            name="todo"
            required
            maxLength="20"
            placeholder="add a task.."
            pattern="[A-Za-z0-9À-ž\s]{2,}"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          ></input>
          <button type="submit">Add task</button>
          <StyledList>
            {todos
              .filter((todo) => todo.tripId === tripId)
              .map((todo, index) => (
                <>
                  <li key={index}>{todo.text}</li>
                  <button onClick={() => deleteTodo(todo)}>delete</button>
                </>
              ))}
          </StyledList>
        </fieldset>
      </form>
      <PrimaryLink href={`/TripDetailPage/${tripId}`}>Back to trip</PrimaryLink>
    </>
  );
}

const StyledList = styled.ul`
  list-style: none;
`;
