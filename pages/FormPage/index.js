import PrimaryLink from "@/components/PrimaryLink";
import { styled } from "styled-components";

export default function CreateTripForm() {
  return (
    <FlexContainer>
      <h2>Create your trip</h2>
      <PrimaryLink href="/">Create your trip</PrimaryLink>
    </FlexContainer>
  );
}

const FlexContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
`;
