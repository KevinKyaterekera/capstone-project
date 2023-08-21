import Button from "@/components/CircularButton";
import { styled } from "styled-components";

export default function CreateTripForm() {
  return (
    <FlexContainer>
      <h2>Create your trip</h2>
      <Button />
    </FlexContainer>
  );
}

const FlexContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
`;
