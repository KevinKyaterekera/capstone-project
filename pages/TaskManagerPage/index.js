import { uid } from "uid";
import TodoForm from "./ToDoForm";
import { useState } from "react";
import Todo from "./ToDo";
import { styled } from "styled-components";
import Link from "next/link";

/* keep in mind, that this one has to be rendered somewhere */
export default function ToDoContainer() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: uid(),
        task: todo,
        completed: false,
        isEditing: false,
      },
    ]);
  };
  return (
    <>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo task={todo} key={index} />
      ))}
      <BackLink href="/">Back to overview</BackLink>
    </>
  );
}
/* reminder to style this task manager properly */

const BackLink = styled(Link)`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-left: 4rem;
  padding: 0.2rem;
  border-radius: 5px;
  text-decoration: none;
  color: black;
  border: 0.5px solid black;
  width: 55%;
`;
