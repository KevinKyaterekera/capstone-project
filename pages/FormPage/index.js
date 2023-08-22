import Form from "@/components/Form";
import PrimaryLink from "@/components/PrimaryLink";
import { styled } from "styled-components";

export default function CreateTripForm({ currentTrips, setCurrentTrips }) {
  return (
    <FlexContainer>
      <h2>Create your trip</h2>
      <Form currentTrips={currentTrips} setCurrentTrips={setCurrentTrips} />
    </FlexContainer>
  );
}

const FlexContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
