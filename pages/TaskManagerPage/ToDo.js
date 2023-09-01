import { styled } from "styled-components";

export default function Todo({ task, toggleComplete, deleteTodo, editTodo }) {
  return (
    <StyledContainer>
      <StyledTaskName
        onClick={() => toggleComplete(task.id)}
        completed={task.completed}
      >
        {task.task}
      </StyledTaskName>
      <button onClick={() => editTodo(task.id)}>Edit</button>
      <button onClick={() => deleteTodo(task.id)}>Delete</button>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  width: 65%;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  border: 1px solid grey;
  border-radius: 5px;
  margin-bottom: 1rem;
  cursor: pointer;
  margin-left: 4rem;
`;

const StyledTaskName = styled.p`
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  color: ${({ completed }) => (completed ? "green" : "none")};
`;
