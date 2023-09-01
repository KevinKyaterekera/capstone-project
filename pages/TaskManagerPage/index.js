import { uid } from "uid";
import TodoForm from "./ToDoForm";
import Todo from "./ToDo";
import { styled } from "styled-components";
import Link from "next/link";
import useLocalStorageState from "use-local-storage-state";
import EditTodoForm from "./EditToDoForm";

/* page 3 - todo app */

export default function ToDoContainer({
  editTodo,
  editTask,
  deleteTodo,
  toggleComplete,
  addTodo,
  todos,
}) {
  // console.log(todos); --> this value needs to be counted by length in order to display it to the detail page
  return (
    <>
      <StyledContainer>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo) =>
          todo.isEditing ? (
            <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
          ) : (
            <Todo
              task={todo}
              key={todo.id}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          )
        )}
      </StyledContainer>
      <BackLink href="/">Back to overview</BackLink>
    </>
  );
}

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

const StyledContainer = styled.div`
  background-color: lightgray;
  width: 60%;
  margin-left: 4rem;
  border: 1px solid grey;
`;
