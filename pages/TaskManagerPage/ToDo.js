import { styled } from "styled-components";

export default function Todo({ task }) {
  return (
    <StyledContainer>
      <p>{task.task}</p>
      <button>Edit</button>
      <button>Delete</button>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  width: 65%;
  justify-content: center;
  align-items: center;
  background: lightgray;
  border-radius: 5px;
  margin-bottom: 1rem;
  cursor: pointer;
  margin-left: 4rem;
`;
