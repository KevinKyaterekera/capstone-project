import Link from "next/link";
import { styled } from "styled-components";
import { Children } from "react";

export default function CircularButton({ children }) {
  return <StyledButtonLink href="/">{children}</StyledButtonLink>;
}

const StyledButtonLink = styled(Link)`
  text-decoration: none;
  color: black;
  border: 0.5px solid black;
  font-size: 1em;
  border-radius: 0.45rem;
  padding: 0.25em 1em;
  margin: 1em;
`;
