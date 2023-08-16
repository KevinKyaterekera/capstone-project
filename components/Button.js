import { styled } from "styled-components";
export default function Button() {
  return <StyledButton>Back to overview</StyledButton>;
}

const StyledButton = styled.button`
  border: 0.5px solid black;
  font-size: 1em;
  border-radius: 0.5rem;
  padding: 0.25em 1em;
  margin: 1em;
`;
