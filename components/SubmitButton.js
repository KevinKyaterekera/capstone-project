import Link from "next/link";
import { styled } from "styled-components";

export default function DirectToFormPage() {
  return <StyledButtonLink href="/FormPage">Add new trip</StyledButtonLink>;
}

const StyledButtonLink = styled(Link)`
  width: 75%;
  text-decoration: none;
  color: black;
  border: 0.5px solid black;
  font-size: 1em;
  border-radius: 0.45rem;
  padding: 0.25em 1em;
  margin: 1em;
`;
