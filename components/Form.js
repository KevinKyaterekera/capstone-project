import { styled } from "styled-components";

export default function Form() {
  return (
    <StyledFieldset>
      <label>
        Name of your trip:
        <StyledInput
          type="text"
          name="name"
          pattern="^[A-Za-z]+$"
          required
        ></StyledInput>
      </label>
      <label>
        Destination:
        <StyledInput
          type="text"
          name="name"
          pattern="^[A-Za-z]+$"
          required
        ></StyledInput>
      </label>
      <label>
        Time period:
        <StyledInput
          type="date"
          name="name"
          pattern="^[A-Za-z]+$"
          required
        ></StyledInput>
      </label>
      <label>
        Your budget:
        <StyledInput type="number" name="name" required></StyledInput>
      </label>
      <label>
        Who will join you?
        <StyledInput
          type="text"
          name="user"
          pattern="^[A-Za-z]+$"
        ></StyledInput>
      </label>
    </StyledFieldset>
  );
}

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 0.5px solid black;
  border-style: none;
`;

const StyledInput = styled.input`
  width: 100%;
`;
