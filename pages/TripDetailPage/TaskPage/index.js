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
  const [buttonClicked, setButtonClicked] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const editTodo = (todoId) => {
    setEditing(true);
    setEditTodoId(todoId);
    const todoToEdit = todos.find((todo) => todo.todoId === todoId);
    setEditedText(todoToEdit ? todoToEdit.text : "");
  };

  const addTodo = (todoText) => {
    const isDuplicate = todos.some((todo) => todo.text === todoText);
    if (!isDuplicate) {
      const newTodoId = uid();
      const newTodo = { text: todoText, tripId, todoId: newTodoId };
      setTodos([...todos, newTodo]);
      setErrorMessage("");
    } else {
      setErrorMessage("Task with the same text already exists");
    }
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

  function handleChangeButtonClick() {
    setButtonClicked(!buttonClicked);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value) {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <StyledForm onSubmit={handleSubmit}>
        <StyledFieldset>
          <StyledLegend>
            <h2>
              Trip Task Manager - <br />
              You have:
              <br />
              {todos.filter((todo) => todo.tripId === tripId).length} task left
            </h2>
          </StyledLegend>
          <StyledList>
            {todos
              .filter((todo) => todo.tripId === tripId)
              .map((todo) => (
                <StyledInput key={todo.todoId}>
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
                      <TextAlign>{todo.text}</TextAlign>
                      <ButtonContainer>
                        <StyledButton onClick={() => editTodo(todo.todoId)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M21 12C20.7348 12 20.4804 12.1054 20.2929 12.2929C20.1054 12.4804 20 12.7348 20 13V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H11C11.2652 4 11.5196 3.89464 11.7071 3.70711C11.8946 3.51957 12 3.26522 12 3C12 2.73478 11.8946 2.48043 11.7071 2.29289C11.5196 2.10536 11.2652 2 11 2H5C4.20435 2 3.44129 2.31607 2.87868 2.87868C2.31607 3.44129 2 4.20435 2 5V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V13C22 12.7348 21.8946 12.4804 21.7071 12.2929C21.5196 12.1054 21.2652 12 21 12ZM6 12.76V17C6 17.2652 6.10536 17.5196 6.29289 17.7071C6.48043 17.8946 6.73478 18 7 18H11.24C11.3716 18.0008 11.5021 17.9755 11.6239 17.9258C11.7457 17.876 11.8566 17.8027 11.95 17.71L18.87 10.78L21.71 8C21.8037 7.90704 21.8781 7.79644 21.9289 7.67458C21.9797 7.55272 22.0058 7.42201 22.0058 7.29C22.0058 7.15799 21.9797 7.02728 21.9289 6.90542C21.8781 6.78356 21.8037 6.67296 21.71 6.58L17.47 2.29C17.377 2.19627 17.2664 2.12188 17.1446 2.07111C17.0227 2.02034 16.892 1.9942 16.76 1.9942C16.628 1.9942 16.4973 2.02034 16.3754 2.07111C16.2536 2.12188 16.143 2.19627 16.05 2.29L13.23 5.12L6.29 12.05C6.19732 12.1434 6.12399 12.2543 6.07423 12.3761C6.02446 12.4979 5.99924 12.6284 6 12.76ZM16.76 4.41L19.59 7.24L18.17 8.66L15.34 5.83L16.76 4.41ZM8 13.17L13.93 7.24L16.76 10.07L10.83 16H8V13.17Z"
                              fill="#4FABF7"
                            />
                          </svg>
                        </StyledButton>
                        <StyledButton onClick={() => deleteTodo(todo)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <circle cx="10" cy="10" r="10" fill="#29D697" />
                            <path
                              d="M5 10L8.5 13.5L15 7"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </StyledButton>
                      </ButtonContainer>
                    </>
                  )}
                </StyledInput>
              ))}
          </StyledList>
          {buttonClicked && (
            <StyledAddButton onClick={handleChangeButtonClick}>
              ✚
            </StyledAddButton>
          )}
          {buttonClicked === false && (
            <>
              <StyledTodoInput
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
              ></StyledTodoInput>
              <StyledAddButton type="submit">✚</StyledAddButton>{" "}
            </>
          )}
        </StyledFieldset>
        <PrimaryLink
          href={`/TripDetailPage/${tripId}`}
          onClick={handleChangeButtonClick}
        >
          Back to trip
        </PrimaryLink>
      </StyledForm>
    </>
  );
}

const StyledLegend = styled.legend`
  display: flex;
  margin-bottom: 15px;
`;

const StyledList = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledFieldset = styled.fieldset`
  border: none;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTodoInput = styled.input`
  width: 317px;
  height: 90px;
  margin-top: 15px;
  border-radius: 12px;
  border: 1px solid #c2bdbd;
  background: #fff;
  &::placeholder {
    color: #747688;
    font-size: 14px;
    line-height: 23px;
    opacity: 40%;
  }
`;

const StyledInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 317px;
  height: 56px;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: 15px;
  border-style: none;
  text-decoration: none;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledButton = styled.button`
  align-items: flex-end;
  background-color: transparent;
  border-style: none;
  &:hover {
    cursor: pointer;
  }
`;

const StyledAddButton = styled.button`
  width: 46px;
  height: 46px;
  font-size: large;
  margin: 20px 10px;
  border-radius: 50%;
  border-style: none;
  &:hover {
    background-color: #ece9ef;
    cursor: pointer;
  }
  &:active {
    background-color: #29d697;
    transform: translateY(4px);
  }
`;

const TextAlign = styled.div`
  margin-left: 10px;
`;

const ErrorMessage = styled.div`
  color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  border: 1px solid red;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  font-size: 16px;
  font-weight: 600;
  background-color: red;
`;
