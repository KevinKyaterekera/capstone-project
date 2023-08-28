import Form from "@/components/Form";
import PrimaryLink from "@/components/PrimaryLink";
import { styled } from "styled-components";

export default function CreateTripForm({
  currentTrips,
  setCurrentTrips,
  submitNewTrip,
  handleDelete,
  participants,
  submitParticipants,
  handleDeselect,
}) {
  return (
    <FlexContainer>
      <h2>Create your trip</h2>
      <Form
        currentTrips={currentTrips}
        setCurrentTrips={setCurrentTrips}
        submitNewTrip={submitNewTrip}
        handleDelete={handleDelete}
        participants={participants}
        submitParticipants={submitParticipants}
        handleDeselect={handleDeselect}
      />
    </FlexContainer>
  );
}

const FlexContainer = styled.ul`
  gap: 1.6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
