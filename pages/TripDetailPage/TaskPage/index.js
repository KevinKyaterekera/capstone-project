import useLocalStorageState from "use-local-storage-state";
import PrimaryLink from "../../../components/PrimaryLink";
import { useState } from "react";
import { styled } from "styled-components";
import { uid } from "uid";

export default function TaskForm({ tripId }) {
  const [value, setValue] = useState();
  const [todos, setTodos] = useLocalStorageState("todo", {
    defaultValue: [],
  });
  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState("");
  const [editTodoId, setEditTodoId] = useState("");

  const editTodo = (todoId) => {
    setEditing(true);
    setEditTodoId(todoId);
    const todoToEdit = todos.find((todo) => todo.todoId === todoId);
    setEditedText(todoToEdit ? todoToEdit.text : "");
  };

  const addTodo = (todoText) => {
    const newTodo = { text: todoText, tripId, todoId: uid() };
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = (removeTodo) =>
    setTodos(todos.filter((todo) => todo.text !== removeTodo.text));

  const saveEditedTodo = () => {
    const updatedTodos = todos.map((todo) =>
      todo.todoId === editTodoId ? { ...todo, text: editedText } : todo
    );
    setTodos(updatedTodos);
    setEditing(false);
    setEditTodoId("");
    setEditedText("");
  };

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
            maxLength="20"
            placeholder="add a task.."
            pattern="[A-Za-z0-9À-ž\s]{2,}"
            value={value}
            onChange={(event) => {
              if (isEditing) {
                setEditedText(event.target.value);
              } else {
                setValue(event.target.value);
              }
            }}
          ></input>
          <button type="submit">Add task</button>
          <StyledList>
            {todos
              .filter((todo) => todo.tripId === tripId)
              .map((todo) => (
                <li key={todo.todoId}>
                  {isEditing && editTodoId === todo.todoId ? (
                    <>
                      <input
                        type="text"
                        placeholder="update here"
                        onChange={(event) => setEditedText(event.target.value)}
                      />
                      <button onClick={saveEditedTodo}>Save</button>
                    </>
                  ) : (
                    <>
                      {todo.text}
                      <button onClick={() => editTodo(todo.todoId)}>
                        Edit
                      </button>
                      <button onClick={() => deleteTodo(todo)}>Delete</button>
                    </>
                  )}
                </li>
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
