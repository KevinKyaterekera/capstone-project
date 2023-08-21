import Link from "next/link";
import { styled } from "styled-components";

export default function DirectToOverviewButton() {
  return <StyledButtonLink href="/">Back to overview</StyledButtonLink>;
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
