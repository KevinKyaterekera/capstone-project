import { useState } from "react";
import { styled } from "styled-components";

export default function EditTodoForm({ task, editTodo }) {
  /* You need to keep track, of the user is putting in - useState */
  const [value, setValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    editTodo(value, task.id);
  };
  return (
    <StyledContainer>
      <StyledEditHeading>Edit your task!</StyledEditHeading>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder="Update task .."
          value={value}
          onChange={(event) =>
            setValue(event.target.value)
          } /* value that will be logged by the user */
        />
        <TodoButton type="submit">Add task</TodoButton>
      </StyledForm>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  background-color: lightgray;
  width: 60%;
  margin-left: 4rem;
  border: 1px solid grey;
`;
const StyledForm = styled.form`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 4rem;
`;

const StyledInput = styled.input`
  border: 1px solid black;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  margin-left: 1.5rem;
  margin-bottom: 2rem;
`;

const TodoButton = styled.button`
  border: none;
  padding: 0.55rem;
  margin-left: 1rem;
  cursor: pointer;
`;

const StyledEditHeading = styled.h4`
  text-align: center;
  margin-bottom: 0.5rem;
`;
